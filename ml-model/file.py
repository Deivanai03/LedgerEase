from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
from azure.core.credentials import AzureKeyCredential
from azure.ai.formrecognizer import DocumentAnalysisClient
import os

app = Flask(__name__)
CORS(app)

# Azure Form Recognizer setup
endpoint = "https://processing-invoice.cognitiveservices.azure.com/"
key = "2a0ff84cbcc541778b400af97dda7c4f"
document_analysis_client = DocumentAnalysisClient(
    endpoint=endpoint, credential=AzureKeyCredential(key))

# Store the file temporarily
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return make_response(jsonify({"error": "No file part"}), 400)
    file = request.files['file']
    if file.filename == '':
        return make_response(jsonify({"error": "No selected file"}), 400)

    # Save file
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
    file.save(filepath)

    try:
        with open(filepath, "rb") as f:
            poller = document_analysis_client.begin_analyze_document(
                "prebuilt-invoice", f)
            invoices = poller.result()

        # Extract specific fields from the analyzed invoice
        results = []
        for idx, invoice in enumerate(invoices.documents):
            # Format and append each invoice's data
            print("--------Recognizing invoice #{}--------".format(idx + 1))
            invoice_dict = {
                "Invoice Number": invoice.fields.get("InvoiceId").value if invoice.fields.get("InvoiceId") else "Not found",
                "Customer Name": invoice.fields.get("CustomerName").value if invoice.fields.get("CustomerName") else "Not found",
                "Invoice Date": str(invoice.fields.get("InvoiceDate").value) if invoice.fields.get("InvoiceDate") else "Not found",
                "Issue Date": str(invoice.fields.get("InvoiceDate").value) if invoice.fields.get("InvoiceDate") else "Not found",
                "Total Amount": f"{invoice.fields.get('InvoiceTotal').value.amount} {invoice.fields.get('InvoiceTotal').value.code}" if invoice.fields.get("InvoiceTotal") else "Not found",
                "Due Date": str(invoice.fields.get("DueDate").value) if invoice.fields.get("DueDate") else "Not found",
            }
            results.append(invoice_dict)
            print("invoice_dict", invoice_dict)
            print("++++++++++++++++++++++++++++++++++++++++++++++")

        # Optionally, remove the file after processing
        os.remove(filepath)

        return jsonify({"message": "File uploaded and processed successfully", "results": results})
    except Exception as e:
        # Optionally, remove the file in case of failure
        os.remove(filepath)
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    os.makedirs(UPLOAD_FOLDER, exist_ok=True)
    app.run(debug=True, host='0.0.0.0', port=5000)

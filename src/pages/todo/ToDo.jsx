import React from 'react'


const ToDo = () => {

    const pdfUrl = "/asset_pdf/file-example_PDF_1MB.pdf"; // If it's in public folder, e.g., `/public/file-example_PDF_1MB.pdf`
    const pfmain ="/asset_pdf/Design_Analysis_Algorithms_Summaries.pdf";

    const handleDownload = () => {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.setAttribute("download", "file-example_PDF_1MB.pdf"); // Download attribute to trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    const handleDownload1 = () => {
      const link = document.createElement("a");
      link.href = pfmain;
      link.setAttribute("download", "DAA"); // Download attribute to trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  return (
    <div>
    <div className='d-flex'>

    <input type="text" /> 
    </div>



    <a href="/example.pdf" download="/https://react-pdf.org/" />
    <button onClick={handleDownload} style={{ padding: "10px", fontSize: "16px" }}>
        Download PDF
      </button>
    <button onClick={handleDownload1} style={{ padding: "10px", fontSize: "16px" }}>
        Download  DAA PDF
      </button>

    </div>
  )
}

export default ToDo





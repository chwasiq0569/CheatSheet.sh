import React from 'react';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const GenericPdfDownloader = ({ rootElementId, downloadFileName }) => {

    const downloadPdfDocument = () => {
        const input = document.getElementById('pdf'); // Replace with your SVG container ID
        html2canvas(input, { scale: 1, allowTaint: true, useCORS: true, scrollX: 0, scrollY: -window.scrollY, windowWidth: document.documentElement.offsetWidth, windowHeight: document.documentElement.offsetHeight })
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/svg', 1.0);
                const pdf = new jsPDF('p', 'mm', 'a4');
                pdf.addImage(imgData, 'SVG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
                pdf.save(`${downloadFileName}.pdf`);
            });
    };

    return <button style={{ border: "2px solid red", color: "red" }} onClick={downloadPdfDocument}>Download Pdf</button>

}

export default GenericPdfDownloader;
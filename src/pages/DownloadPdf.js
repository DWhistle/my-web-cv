import React from "react";
import ReactDOMServer from "react-dom/server";
import jsPDF from "jspdf";
import Resume from "./../App";

const DownloadPdf = () => {
  const doc = new jsPDF();
  doc.fromHTML(ReactDOMServer.renderToStaticMarkup(Resume()));
  doc.save("myDocument.pdf");
};

export default DownloadPdf;

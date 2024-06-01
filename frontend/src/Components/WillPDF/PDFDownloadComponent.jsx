import React from 'react';
import { PDFDownloadLink} from '@react-pdf/renderer';
import PDFDocumentIP from './IPpdf.js';
import PDFDocumentWill from './Willpdf.js'
// Define styles for the PDF document

// Define the component that handles PDF download
const PDFDownloadComponent = ({ data,type,blockId,trxnHash,documentId }) => (
  <div className='mdbtn mdbtn1'>
  {
    console.log(data)
  }
    <PDFDownloadLink document={
      type==='ip'?
    <PDFDocumentIP data={data} blockId={blockId} trxnHash={trxnHash} documentId={documentId}/>:<PDFDocumentWill data={data} blockId={blockId} trxnHash={trxnHash} documentId={documentId}/>}
     fileName="document.pdf" className='pdfdwmlnk_ip'>
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download PDF'
      }
    </PDFDownloadLink>
  </div>
);

export default PDFDownloadComponent;

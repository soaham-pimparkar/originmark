import React, { useEffect, useState } from "react";
import "../../Styles/Modal.css";
import closeimg from "../../assets/closeSVG.svg";
import PDFDownloadComponent from "../../Components/WillPDF/PDFDownloadComponent.jsx";
import axios from "axios";


const Modal = ({ modalData, setModal, isverified, setIsVerified }) => {
  const [IPdata, setIPData] = useState(null);
 
  const showDoc=()=>{
      
  }
  
  useEffect(() => {
    getBlock();
  }, []);

  const getBlock = async () => {
    await axios
      .get(`/user/read${modalData.type?'ip':'will'}?id=${modalData.documentId}`)
      .then((res) => {
        setIPData(res.data.record);
        console.log("res", res.data);
      })
      .catch((e) => {
        console.log(e);
        alert("something went wrong");
      });
  };
  // getBlock();
  return (
    
    <section id="modal_sec">
      <div id="modal_clsbtn_div">
        <button
          onClick={() => {
            setModal(false);
            setIsVerified(false);
          }}
        >
          <img src={closeimg} alt="" />
        </button>
      </div>
      <div id="modal_div">
        {isverified && <p className="isverified_div">Verified Document</p>}
        {!isverified &&
            <p className="modal_title">{IPdata?.title}</p>}
        {!isverified &&
            <p className="modal_id">
          Block ID: <span className="modal_mnid">{modalData?.blockNumber}</span>
        </p>}
       {!isverified &&
       <p className="modal_type">
          Type : <span className="modal_mntype">{modalData?.type}</span>
        </p>}
        {/* <p className='modal_desc_title'>
                    Description<br />
                    <p className='modal_desc'>{modalData.newDescription}</p>
                </p> */}

        <p className="modal_btns">
        {
            IPdata && 
            <a  
          href={`https://ipfs.io/ipfs/${IPdata.proofs[0]}`}
          className="mdbtn" onClick={showDoc}>
            View Document
          </a>
        }
        {
            isverified && modalData &&
            <a  
          href={`https://ipfs.io/ipfs/${modalData?.willDocument}`}
          className="mdbtn" onClick={showDoc}>
            View Document
          </a>
        }
          
          {/* <button onClick={getBlock}> */}
          {IPdata && (
            <PDFDownloadComponent
              data={IPdata ? IPdata : {}}
              type={modalData?.type?'ip':'will'}
              blockId={modalData?.blockNumber}
              trxnHash={modalData?.trxnHash}
              documentId={modalData?.documentId}
            />
          )}
        {
            isverified &&
            <PDFDownloadComponent
              data={modalData}
              type={modalData?.type?'ip':'will'}
              blockId={modalData?.blockNumber}
              trxnHash={modalData?.trxnHash}
              documentId={modalData?.documentId}
            />
        }
          {/* </button> */}
        </p>
      </div>
    </section>
  );
};

export default Modal;

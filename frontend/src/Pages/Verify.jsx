import React from 'react'
import '../Styles/Verify.css';
import Modal from '../Components/Modal/Modal';
import { useState } from 'react';
import axios from 'axios';
import { Ips } from './Ipdata';

const Verify = () => {
  const [showModal, setModal] = useState(false);
  const [modalData, setModalData] = useState(null)
  const [valid, setValid] = useState(true);
  const [isverified, setIsVerified] = useState(false);
  // let modalData;
  const validSubmit = async (event) => {
    event.preventDefault()
    const docid = event.target.docid.value;

    const res = await axios.get(`/user/read${event.target.doctype.value}?id=${docid}`)
    if (res) {
      const data = res.data.record;
      setModalData(data)
      console.log("veridata", modalData)
      // setModal(true)

    }
    else {
      setValid(false)
      setModal(false)
    }

    if (docid === "") {
      setValid(false)
    }
    else {
      setValid(true)
    }
  }

  return (
    <>
      <section id='verify_sec'>
        <div id='verify_main_div'>
          <p id='verify_title'>Verify Document</p>
          <form action="" onSubmit={validSubmit}>
            <div id='verify_id_div'>
              <input type="text" placeholder='Enter Document Type (will/ip)' name='doctype' />
            </div>
            <div id='verify_id_div'>
              <input type="text" placeholder='Enter Document ID' name='docid' />
            </div>
            {
              !valid &&
              <p id='valid_verify'>
                Enter Valid ID
              </p>

            }
            <div id='verify_sub_div'>
              <button >
                Submit
              </button>
            </div>

          </form>
        </div>
      </section>
      {
        modalData &&
        <Modal modalData={modalData} setModal={setModal} isverified={true} setIsVerified={setIsVerified} />
      }
    </>

  )
}

export default Verify
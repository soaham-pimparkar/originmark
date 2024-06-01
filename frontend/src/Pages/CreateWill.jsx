import React from 'react';
import uploadimg from '../assets/uploadSVG.svg';
import { useState } from 'react';
import '../Styles/CreateWill.css'
import DragAndDrop from '../Components/DragAndDrop/DragAndDrop';
import axios from 'axios';
import { ScrollRestoration } from 'react-router-dom';
/*
newExecutorName,
        newExecutorIdProof,
        newExecutorDigitalSign,

        newTestatorName,
        newTestatorIdProof,
        newTestatorDigitalSign,

        newWitnessName,
        newWitnessIdProof,
        newWitnessDigitalSign,

        newDocument,
 */
const CreateWill = () => {
  const [selectedfile, SetSelectedFile] = useState([])
  const [valid, setValid] = useState(true);
  const [exdigsign, setexDigSign] = useState('');
  const [tesdigsign, settesDigSign] = useState('');

  const [witdigsign, setwitDigSign] = useState('');

  let itemFormData = new FormData();

  const submitIPForm = async (e) => {
    e.preventDefault();

    itemFormData.append('willDocs', e.target.newExecutorDigitalSign.files[0]);
    itemFormData.append('willDocs', e.target.newTestatorDigitalSign.files[0]);
    itemFormData.append('willDocs', e.target.newWitnessDigitalSign.files[0]);
    for (let i = 0; i < selectedfile.length; i++) {
      itemFormData.append('willDocs', selectedfile[i]);
    }

    itemFormData.append("newExecutorName", e.target.newExecutorName.value);
    itemFormData.append("newExecutorIdProof", e.target.newExecutorIdProof.value);
    // itemFormData.append("newExecutorDigitalSign", e.target.newExecutorDigitalSign.file);

    itemFormData.append("newTestatorName", e.target.newTestatorName.value);
    itemFormData.append("newTestatorIdProof", e.target.newTestatorIdProof.value);
    // itemFormData.append("newTestatorDigitalSign", e.target.newTestatorDigitalSign.file);

    itemFormData.append("newWitnessName", e.target.newWitnessName.value);
    itemFormData.append("newWitnessIdProof", e.target.newWitnessIdProof.value);
    // itemFormData.append("newWitnessDigitalSign", e.target.newWitnessDigitalSign.file);

    // itemFormData.append("newDocument", e.target.newDocument.value);
    //console.log("hello ", selectedfile, e.target.newExecutorName.value)
    const axiosConfig = {
      headers: {
        'Content-Type': "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
      }

    }


    await axios.post('/user/uploadWill', itemFormData, axiosConfig)
      .then((it) => {
        alert("Item added ")
      })
      .catch((err) => {
        alert("error")
        console.log(err);
      })

    e.target.reset();
    SetSelectedFile([]);
  }

  return (
    <section id='create_ip_sec'>
      <p id='create_ip_title'>Create Will</p>
      <form action="" onSubmit={submitIPForm}>
        <div id='owner_det_div'>
          <p className='create_titles'>Executor Details</p>
          <div id='owner_det_inpt_div'>
            <div className='inps'>
              <input type="text" name='newExecutorName' placeholder='Name' />
            </div>
            <div className='inps inp1'>
              {
                exdigsign.length > 0 &&
                exdigsign.slice(0, exdigsign.length)
              }
              Upload Digital Sign
              <input type="file" name='newExecutorDigitalSign' onChange={(event) => { setexDigSign(event.target.value) }} />
              <img src={uploadimg} alt="" />
            </div>
            <div className='inps'>
              <input type="text" placeholder='Aadhar no.' name='newExecutorIdProof' />
            </div>
          </div>

        </div>
        <div id='owner_det_div_cover'>
          <div id='owner_det_div'>
            <p className='create_titles'>Testator Details</p>
            <div id='owner_det_inpt_div'>
              <div className='inps'>
                <input type="text" name='newTestatorName' placeholder='Name' />
              </div>
              <div className='inps inp1'>
                {
                  tesdigsign.length > 0 &&
                  tesdigsign.slice(0, tesdigsign.length)
                }
                Upload Digital Sign
                <input type="file" name='newTestatorDigitalSign' onChange={(event) => { settesDigSign(event.target.value) }} />
                <img src={uploadimg} alt="" />
              </div>
              <div className='inps'>
                <input type="text" placeholder='Aadhar no.' name='newTestatorIdProof' />
              </div>
            </div>
          </div>
        </div>
        <div id='owner_det_div'>
          <p className='create_titles'>Witness Details</p>
          <div id='owner_det_inpt_div'>
            <div className='inps'>
              <input type="text" name='newWitnessName' placeholder='Name' />
            </div>
            <div className='inps inp1'>
              {
                witdigsign.length > 0 &&
                witdigsign.slice(0, witdigsign.length)
              }
              Upload Digital Sign
              <input type="file" name='newWitnessDigitalSign' onChange={(event) => { setwitDigSign(event.target.value) }} />
              <img src={uploadimg} alt="" />
            </div>
            <div className='inps'>
              <input type="text" placeholder='Aadhar no.' name='newWitnessIdProof' />
            </div>
          </div>

        </div>
        <div id='owner_det_div_cover'>
          <div id='owner_det_div'>
            <DragAndDrop selectedfile={selectedfile} SetSelectedFile={SetSelectedFile} />
          </div>
        </div>
        <p id='agree_chk_div'>
          <input type="checkbox" name='tanc_chk' />
          &nbsp;
          I acknowledge that I own the rights to the submitted document and
          agree to the <a href='https://www.w3schools.com' id='tc_text'>terms and conditions.</a>
        </p>
        {
          !valid &&
          <p id='valid_div'>
            Please enter the required details
          </p>
        }
        <p id='createip_btns_div'>
          <button className='sbt_btn'>Submit</button>
        </p>
      </form>
      <ScrollRestoration />
    </section>


  )
}

export default CreateWill


import React, { useState } from 'react'
import '../Styles/CreateIp.css'
import uploadimg from '../assets/uploadSVG.svg'
import DragAndDrop from '../Components/DragAndDrop/DragAndDrop'
import axios from 'axios'
import { ScrollRestoration } from 'react-router-dom'
const CreateIP = () => {
  const [selectedfile, SetSelectedFile] = useState([])
  const [valid, setValid] = useState(true);
  const [addhar, setAadhar] = useState('');
  const [digsign, setDigSign] = useState('');

  // const [newExtrainfo, setAdditionalInfo] = useState('');
  // const [termsChecked, setTermsChecked] = useState(false);

  let itemFormData = new FormData();

  const submitIPForm = async (e) => {
    e.preventDefault();
     

    itemFormData.append('docs',e.target.newOwnerDigitalSign.files[0]);
   
    for (let i = 0; i < selectedfile.length; i++) {
      
      itemFormData.append('docs', selectedfile[i] );
    }

    itemFormData.append("newOwnerName", e.target.newOwnerName.value);
    itemFormData.append("newOwnerProofIdentifier", e.target.newOwnerProofIdentifier.value);
    itemFormData.append("newTitle", e.target.newTitle.value);
    itemFormData.append("newIpType", e.target.newIpType.value);
    itemFormData.append("newDescription", e.target.newDescription.value);
    itemFormData.append("newLinks", e.target.stnewLinks.value);
    itemFormData.append("newLicenseType", e.target.newLicenseType.value);
    itemFormData.append("termsChecked", e.target.termsChecked.value);
    itemFormData.append("newExtraInfo", e.target.newExtrainfo.value);
    

    const axiosConfig = {
      headers: {
        'Content-Type': "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
      }
    }
    await axios.post('/user/upload', itemFormData, axiosConfig)
      .then((it) => {
        alert("Item added ")
      })
      .catch((err) => {
        alert("error")
        console.log(err);
      })
    e.target.reset();
    SetSelectedFile([])
    
  }
  //  setValid(true);
  return (
    <section id='create_ip_sec'>
      <p id='create_ip_title'>Create IP</p>
      <form action="" onSubmit={submitIPForm}>
        <div id='owner_det_div'>
          <p className='create_titles'>Owner Details</p>
          <div id='owner_det_inpt_div'>
            <div className='inps'>
              <input type="text" name='newOwnerName' placeholder='Name' />
            </div>
            <div className='inps inp1'>
              {
                digsign.length > 0 &&
                `${digsign.slice(0, 30)} ...`
              }
              {
                digsign.length === 0 &&
                ` Upload Digital Sign`
              }

              <input type="file" name='newOwnerDigitalSign' onChange={(e) => { setDigSign(e.target.value) }} />
              <img src={uploadimg} alt="" />
            </div>
            <div className='inps'>
              <input type="text" placeholder='Aadhar no.' name='newOwnerProofIdentifier' />
            </div>
            {/* <div className='inps inp1'>
              {
                addhar.length > 0 &&
                addhar.slice(0, addhar.length)
              }
              Upload Aadhar Photocopy
              <input type="file" onChange={(event) => { setAadhar(event.target.value) }} name='newOwnerProofIdentifier' />
              <img src={uploadimg} alt="" />
            </div> */}
          </div>

        </div>

        <div id='ip_det_div_back'>
          <div id='ip_det_div'>
            <p className='create_titles'>IP Details</p>
            <div id='ip_det_cr1'>
              <div className='inps'>
                <input type="text" name='newTitle' placeholder='Title' />
              </div>
              <div className='inps'>
                <input type="text" name='newIpType' placeholder='Type' />
              </div>
            </div>
            <div id='ip_det_cr2'>
              <div className='inps'>
                <textarea type="text" name='newDescription' placeholder='Description' />
              </div>
            </div>
            <DragAndDrop selectedfile={selectedfile} SetSelectedFile={SetSelectedFile} />
            <div id='ip_det_cr4'>
              <div className='inps'>
                <input type="text" name='stnewLinks' placeholder='External Link' />
              </div>
              <div className='inps'>
                <input type="text" name='newLicenseType' placeholder='License Type' />
              </div>
            </div>
            <div id='ip_det_cr5'>
              <div className='inps'>
                <input type="text" name='newExtrainfo' placeholder='Additional Information' />
              </div>
            </div>
          </div>
        </div>
        <p id='agree_chk_div'>
          <input type="checkbox" name='termsChecked' />
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
          <button className='sbt_btn' >Submit</button>
        </p>
      </form>
      <ScrollRestoration/>
    </section>
  )
}

export default CreateIP
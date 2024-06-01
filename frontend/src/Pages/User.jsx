import React, { useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../Styles/User.css'
import userimg from '../assets/userSVG.svg'
import crimg from '../assets/createImg.svg'
import vrimg from '../assets/verifyImg.svg'
import { Ips } from './Ipdata.js'
import arrowimg from '../assets/arrowUpSVG.svg'
import Modal from '../Components/Modal/Modal.jsx'
import axios from 'axios'
import {  useNavigate } from "react-router-dom";


const User = () => {
    const [showModal, setModal] = useState(false);
    const [modalData, setModalData] = useState(null)
    const [isverified, setIsVerified] = useState(false);
    const [user,setUser]=useState([]);
    const [userCreations,setUserCreations]=useState([]);
    const nevigate = useNavigate();
    const getuser =()=>{
        axios.get('/user/getuser')
       .then((res)=>{
        console.log("radarobj",res)
         setUser(res.data) 
         setUserCreations(user.userIP);
        //  
       })
       .catch(()=>{
           alert("Please Login first");
           nevigate('/login');
       })   
   }
    useEffect(() => {
       
       getuser();
       
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      
   
   //TODO : call get User function in useEffect hook 
   // to get the logged in user data 

    return (
        <>
            <section id='user_sec1'>
                <div id='user_panel'>
                    <div id='user_detail_div'>
                        <div id='user_imgdiv'>
                            <img src={userimg} alt="" />
                        </div>
                        <div id='user_details_div'>
                            <p id='username'>{user?.name}</p>
                            <p id='useremail'>{user?.email}</p>
                            <p id='userphone'>{user?.phone}</p>
                        </div>
                    </div>
                    <div id='user_work_div'>
                        <p id='r1'>POFU's created by you</p>
                        <div id='r2'>
                            <div id='total_cnt'>{user?.userIP?.length+user?.userWill?.length}</div>
                            <div id='ips'>{user?.userIP?.length}<br />IP's</div>
                            <div id='wills'>{user?.userWill?.length}<br />Will's</div>
                        </div>
                    </div>
                </div>
                <div id='creat_and_verify_div'>
                    <div className='aanv_div'>
                        <div className='aanv_imgdiv'>
                            <img src={crimg} alt="" />
                        </div>
                        <div className='aanv_btndiv'>
                            <Link
                                to='/create'
                                className='aanv_btn'>
                                Create Now
                            </Link>
                        </div>
                    </div>

                    <div className='aanv_div'>
                        <div className='aanv_imgdiv'>
                            <img src={vrimg} alt="" />
                        </div>
                        <div className='aanv_btndiv'>
                            <Link
                                to='/verify'
                                className='aanv_btn'>
                                Verify Doc
                            </Link>
                        </div>
                    </div>

                </div>
            </section>

            <section id='user_sec2'>
                <div id='user_sec2title'>Your PoFU's</div>
                <div id='user_ips_div'>
                    {
                        user.userIP?.length >= 0 &&
                        user.userIP?.map((ip, index) => {
                            return (
                                <div className='ip_div' key={index}>
                                    <p className='ip_title'>{ip.title}</p>
                                    <p className='ip_id'>{ip.blockNumber}</p>
                                    <p className='ip_vmore'>
                                        <button
                                            onClick={() => {
                                                setModal(true);
                                                console.log("ip",ip)
                                                setModalData(ip);
                                            }}
                                            className='ipvlink'>
                                            View More
                                            <img src={arrowimg} alt="" />
                                        </button>
                                    </p>
                                </div>
                            )
                        })
                    }
                    {
                        user.userWill?.length >= 0 &&
                        user.userWill?.map((ip, index) => {
                            return (
                                <div className='ip_div' key={index}>
                                    <p className='ip_title'>Will</p>
                                    <p className='ip_id'>{ip.blockNumber}</p>
                                    <p className='ip_vmore'>
                                        <button
                                            onClick={() => {
                                                setModal(true);
                                                console.log("ip",ip)
                                                setModalData(ip);
                                            }}
                                            className='ipvlink'>
                                            View More
                                            <img src={arrowimg} alt="" />
                                        </button>
                                    </p>
                                </div>
                            )
                        })
                    }
                    {
                        Ips.length === 0 &&
                        <div id='noip_div'>
                            You Have No IP's
                        </div>
                    }
                </div>
            </section>
            {
                showModal &&
                <Modal modalData={modalData} setModal={setModal} isverified={isverified} setIsVerified={setIsVerified} />
            }

        </>
    )
}

export default User
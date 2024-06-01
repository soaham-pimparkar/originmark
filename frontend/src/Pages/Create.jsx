import React from 'react'
import '../Styles/Create.css'
import { Link } from 'react-router-dom'
import arrowimg from '../assets/arrowUpSVG.svg'
const Create = () => {
  return (
    <section id='create_sec1'>
       <div className='create_div'>
         <p className='crr1'>Create IP</p>
         <p className='crr2'>
         Store all the IP information and related documents along with your signature to create a permanent record and get it's certificate.
         </p>
         <p className='crr3'>
          <Link 
          to='/create/ip'
          className='crr3_link'>
          Create 
          <img src={arrowimg} alt="" />
          </Link>
         </p>
       </div>

       <div id='vertical'></div>
       <div className='create_div'>
         <p className='crr1'>Create Will</p>
         <p className='crr2'>
         Store the legal copy of your will along with testator and witness signatures immutably on the blockchain.
         </p>
         <p className='crr3'>
          <Link 
          to='/create/will'
          className='crr3_link'>
          Create 
          <img src={arrowimg} alt="" />
          </Link>
         </p>
       </div>
    </section>
  )
}

export default Create
import React from 'react'
import '../Styles/About.css'
import teamimg from '../assets/TeamSVG.svg'
import { ScrollRestoration } from 'react-router-dom'

const About = () => {
  return (
    <section id='about_sec'>
    <div id='about_sec1'>
      <div id='abt_sec1_cont_div'>
        <p className='abt_ttl pp1'>Who Are We?</p>
        <p className='pp2'>Copyright infringement and disputes over the rightful owner of an Intellectual property are very common. IPs are not always registered and the Indian Copyright Act 1957 grants a default copyright to the creator upon creation of the IP. In instances where the IP is stolen or unpermittedly used and the rightful owner files a case, it is difficult to prove the creatorship of the IP, as the burden of proof lies with the plaintiff. In such cases, the plaintiff must provide a ‘Proof of First Use’ which ultimately states that he/she had the IP, in tangible form, the earliest or at least before the defendant used it.<br/><br/>

Unchained IP provides a Blockchain-based platform for creators to create an immutable ‘Proof of First Use’ document. This document is impossible to tamper and consists of IP, the related information, author’s information and a timestamp. This empowers creators by providing a certificate which serves a credible proof in disputes and acts as the ‘first line of defence’.<br/><br/>

The platform also provides a reliable solution for another bitter problem in the justice sector. Every year, we observe several disputes over alleged tampering of Wills and Probates. The platform extends the capabilities to creating and storing an immutable, tamper-proof and trustless document of Wills and Probates.<br/><br/>

Altogether, the platform offers a state-of-art solution in the ‘Legal-Tech’ or ‘L-tech’ domain. The solution will be available to the public in the form of a Web App with robust security measures. The Tech stack used is: Ethereum Blockchain & Solidity | IPFS | React | Node.js | MongoDB. The Blockchain technology enables a trustless system and creation of documents which is impossible to tamper or change or delete once recorded.<br/>
</p>
      </div>
      <div id='abt_sec1_img_div'>
        <img src={teamimg} alt="" />
      </div>
    </div>
    <div id='about_sec2'>
    <p className='abt_ttl ps1'>Aim</p>
    <p className='aim_cnt'>
    Our aim is to empower individuals and businesses by offering a reliable and efficient solution for proving the first use of their documents, enhancing trust and credibility in legal and intellectual property matters
    </p>
    </div>
    <div id='about_sec3'>
    <p className='abt_ttl ps2'>About team</p>
    <p className='team_cnt'>
    Our team comprises skilled professionals including Soaham, Darshan, Aditya, and Rahul, bringing diverse expertise to ensure top-notch service delivery. With a shared passion for innovation and excellence, we collaborate seamlessly to fulfill our mission of providing unparalleled proof of first use services
    </p>
    </div>
    <p id='about_sec4'>
      <p id='cont_us_div'>
        Contact Us : <span >soahampimparkar@gmail.com</span>
      </p>
      <a href="http://google.com">Feedback</a>
    </p>
    <ScrollRestoration/>
    </section>
  )
}

export default About
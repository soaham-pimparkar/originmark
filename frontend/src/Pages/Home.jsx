import React, { useState } from 'react'
import "../Styles/Home.css"
import homesvg from "../assets/homeSVG.svg"
import { Link, ScrollRestoration } from 'react-router-dom'
import { characteristics, features, questions } from './whydata.js';
import arrowimg from '../assets/arrowUpSVG.svg'
import contimg from '../assets/contactSVG.svg'
import redirectimg from '../assets/redirectBtnSVG.svg'
import qplusimg from '../assets/queplusSVG.svg'
import qminusimg from '../assets/questionMinunsSVG.svg'
import howitworks from '../assets/howitworks.png'


const Home = () => {
    const [currQind, setCurrQind] = useState(-1);

    return (
        <>
            <section id='home_sec1'>
                <div id='cont_div'>
                    <div id='c1'></div>
                    <div id='c2'></div>
                    <div id='c3'></div>
                    <div id='cont_div_main'>
                        <p className='conttext cont1' style={{ color: '#0870D9' }}>Origin<span style={{ color: 'black' }}>Mark</span></p>
                        <p className='conttext cont2'>Your 'first line of defense' <br />against IP theft<br />or will tamper</p>
                        <p className='cont3'>Instantly create Proof-of-First-Use documents or will records and store them on blockchain immutably and permanently!</p>
                        <div id='cont_btndiv'>
                            <Link
                                to='/create'
                                className='clink'>Create Your PoFU Now!</Link>
                        </div>
                    </div>
                </div>
                <div id='pic_div'>
                    <img src={homesvg} alt="" />
                </div>
            </section>
            <section id='home_sec2'>
                <p id='home_sec2title'>Who should create a PoFU?</p>
                <div id='chars_div'>
                    {
                        characteristics.map((char, index) => {
                            return (
                                <div key={index} className='chardiv'>
                                    <div className='img_divUp'>
                                        <div className='img_div'><img src={char.image} alt="" className='char_img' /></div>
                                    </div>

                                    <div className='contdiv'>
                                        <p className='char_title'>
                                            {char.title}
                                        </p>
                                        <p className='char_content'>
                                            {char.content}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <section id='home_sec3'>
                <p id='home_sec3title'>Features</p>
                <p id='home_sec3cont'>"Numerous disputes over IP theft and Will are filed in courts every year.<br/>In case of IP theft, it is difficult for the plaintiff to prove his/her creatorship as the burden of proof lies on the plaintiff. The PoFU helps the owner establish a proof of existence in such cases.<br/>Similarly, to avoid disputes over potential tampering of Wills, the Will document can be immutably stored on the blockchain"</p>

                <div id='features_div'>
                    {
                        features.map((feature, index) => {
                            return (
                                <div className='featurediv' key={index}>
                                    <div className='fl1'>
                                        <div className='d1'>
                                            <img src={feature.image} alt="" />
                                        </div>
                                        <div className='d2'>{feature.title}</div>
                                    </div>
                                    <p className='fl2'>{feature.content}</p>
                                    <div className='fl3'>
                                        <div className='btn1 btn'>
                                            <Link
                                                to={`/create/${index === 0 ? 'ip' : 'will'}`}
                                                className='linktored'>
                                                Create
                                                <img src={arrowimg} alt="" />
                                            </Link>
                                        </div>

                                        <div className='btn2 btn'>
                                            <Link
                                                to='/verify'
                                                className='linktored'>
                                                Verify
                                                <img src={arrowimg} alt="" />
                                            </Link>

                                        </div>

                                    </div>
                                </div>
                            )

                        })}


                </div>
            </section>
            <section id='home_sec4'>
                <div id='home_sec4title'>How It Works?</div>
                <div id='hiw_div'><center><img src={howitworks} alt="" /></center></div>
            </section>
            <section id='home_sec5'>
                <div id='sce5contdiv'>
                    <p id='home_sec5title'>Get In Touch</p>
                    <p id='home_sec5cont'>Curious about us?<br/> visit the following page to know more about us or to reach out!</p>
                    <div id='redirects_div'>
                        <Link
                            to='/about'
                            className='redlink rl1'>
                            <img src={redirectimg} alt="" />
                            About Us
                        </Link>
                    </div>
                </div>

                <div id='sec5_imgdiv'>
                    <img src={contimg} alt="" />
                </div>
            </section>
            <section id='home_sec6'>
                <div id='home_sec6title'>FAQs</div>
                <div id='ques'>
                    {
                        questions.map((que, index) => {
                            return (
                                <div className='que_div' key={index}>
                                    <div className='qimgdiv'>
                                        <button onClick={() => {
                                            if (currQind === index) {
                                                setCurrQind(-1);
                                            }
                                            else {
                                                setCurrQind(index)
                                            }
                                        }
                                        }>
                                            <img src={index === currQind ? qminusimg : qplusimg} alt="" />
                                        </button>
                                    </div>

                                    <div className='qdiv'>
                                        {que.que}
                                        <br />

                                        {
                                            index === currQind &&
                                            <div className='ansdiv'>
                                                {que.ans} </div>
                                        }

                                    </div>



                                </div>
                            )
                        })
                    }
                </div>
                <ScrollRestoration/>
            </section>
        </>
    )
}

export default Home
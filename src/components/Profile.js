import React, { Component } from 'react';
import './css/profile.css';
import p from '../components/Images/p.jpg';
import home from '../components/Images/home.jpg';



export class Profile extends Component {
    render() {
        return (
            <div className="containr">
                    <div className="sidebar">
                        <div className="image">
                            {/* <img className="image" src= {p} alt=""/>  */}
                        </div>
                        <div className="intro">
                            <p className="txt-h">Name:</p>
                            <p className="txt">Lorem Ipsum</p>
                            <p className="txt-h">Role:</p>
                            <p className="txt">Lorem Ipsum</p>
                            <p className="txt-h">Email:</p>
                            <p className="txt">Lorem@Ipsum</p>
                            <p className="txt-h">Phone:</p>
                            <p className="txt">997784 456</p>
                        </div>
                    </div>


                    <div className="he-cont">
                        <div className="container-1">
                                <div className="bio"><span>Hello. My name is</span>
                                    <h1 className="name">Amy Pickaboo singh</h1><p>A full stack all around designer that may or may not include a guide for specific creative potential methods who framing and evaluating moves.</p>
                                <div className="connect">
                                        <p className="txt">INSTAGRAM</p>
                                        <p className="txt">GITHUB</p>
                                        <p className="txt">LINKEDIN</p>
                                        <p className="txt">TWITTER</p>

                                </div>
                                </div>
                                <div className="pict">
                                <img className="pict" src= {home} alt=""/>
                                </div>
                        </div>
                        <div  className="her-cont">

                            <div className="edu">
                                <div className="timeline">
                                    <ul>
                                        <li>
                                            <div className="content"><h1>
                                                Lorem Ipsum dolor sit amet</h1>
                                                <p>aezsxdcfvhjbmk</p>
                                            </div>
                                            <div className="time">
                                                nov 2020
                                            </div>
                                        </li>
                                        <li>
                                            <div className="content"><h1>
                                                Lorem Ipsum dolor sit amet</h1>
                                                <p>aezsxdcfvhjbmk</p>
                                            </div>
                                            <div className="time">
                                                nov 2020
                                            </div>
                                        </li>
                                        <li>
                                            <div className="content"><h1>
                                                Lorem Ipsum dolor sit amet</h1>
                                                <p>aezsxdcfvhjbmk</p>
                                            </div>
                                            <div className="time">
                                                nov 2020
                                            </div>
                                        </li>
                                        <li>
                                            <div className="content"><h1>
                                                Lorem Ipsum dolor sit amet</h1>
                                                <p>aezsxdcfvhjbmk</p>
                                            </div>
                                            <div className="time">
                                                nov 2020
                                            </div>
                                        </li>
                                        <div className="stylee"></div>
                                    </ul>
                                </div>
                            </div>

                          <div>
                            <div className="exp">
                                <div className="timeline">
                                    <ul>
                                        <li>
                                            <div className="content"><h1>
                                                Lorem Ipsum dolor sit amet</h1>
                                                <p>aezsxdcfvhjbmk</p>
                                            </div>
                                            <div className="time">
                                                nov 2020
                                            </div>
                                        </li>
                                        <li>
                                            <div className="content"><h1>
                                                Lorem Ipsum dolor sit amet</h1>
                                                <p>aezsxdcfvhjbmk</p>
                                            </div>
                                            <div className="time">
                                                nov 2020
                                            </div>
                                        </li>
                                        <li>
                                            <div className="content"><h1>
                                                Lorem Ipsum dolor sit amet</h1>
                                                <p>aezsxdcfvhjbmk</p>
                                            </div>
                                            <div className="time">
                                                nov 2020
                                            </div>
                                        </li>
                                        <li>
                                            <div className="content"><h1>
                                                Lorem Ipsum dolor sit amet</h1>
                                                <p>aezsxdcfvhjbmk</p>
                                            </div>
                                            <div className="time">
                                                nov 2020
                                            </div>
                                        </li>
                                        <li>
                                            <div className="content"><h1>
                                                Lorem Ipsum dolor sit amet</h1>
                                                <p>aezsxdcfvhjbmk</p>
                                            </div>
                                            <div className="time">
                                                nov 2020
                                            </div>
                                        </li>
                                        <li>
                                            <div className="content"><h1>
                                                Lorem Ipsum dolor sit amet</h1>
                                                <p>aezsxdcfvhjbmk</p>
                                            </div>
                                            <div className="time">
                                                nov 2020
                                            </div>
                                        </li>
                                        <div className="stylee"></div>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="skills">
                                <div className="bar">
                                    <svg>
                                        <circle className="bar-frm" cx="50%" cy="50%" r="50%">
                                        </circle>
                                        <circle className="highlight" cx="50%" cy="50%" r="50%">
                                        </circle>
                                    </svg>
                                    <h1 className="pnct">90%</h1>
                                    <h1>thi</h1>
                                </div>
                                <div className="bar">
                                    <svg>
                                        <circle className="bar-frm" cx="50%" cy="50%" r="50%">
                                        </circle>
                                        <circle className="highlight" cx="50%" cy="50%" r="50%">
                                        </circle>
                                    </svg>
                                    <h1 className="pnct">90%</h1>
                                </div>
                                <div className="bar">
                                    <svg>
                                        <circle className="bar-frm" cx="50%" cy="50%" r="50%">
                                        </circle>
                                        <circle className="highlight" cx="50%" cy="50%" r="50%">
                                        </circle>
                                    </svg>
                                    <h1 className="pnct">90%</h1>
                                </div>
                                <div className="bar">
                                    <svg>
                                    <circle className="bar-frm" cx="50%" cy="50%" r="50%">
                                        </circle>
                                        <circle className="highlight" cx="50%" cy="50%" r="50%">
                                        </circle>
                                       
                                    </svg>
                                    <h1 className="pnct">90%</h1>
                                </div>
                            </div>
                            <div className="skill">
                                <ul>
                                <li>
                                    <h3>HTML5</h3><span className="s-bar"><span className="html thickk"></span></span>
                                </li>
                                <li>
                                    <h3>HTML5</h3><span className="s-bar"><span className="html"></span></span>
                                </li>
                                <li>
                                    <h3>HTML5</h3><span className="s-bar"><span className="html"></span></span>
                                </li>
                                <li>
                                    <h3>HTML5</h3><span className="s-bar"><span className="html"></span></span>
                                </li>
                                <li>
                                    <h3>HTML5</h3><span className="s-bar"><span className="html"></span></span>
                                </li>
                                </ul>
                            </div>
                            <div className="container-2">
                                <div className="achmnt">
                                <div className="cert">
                                        <h2>Cert 1</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                    <div className="cert">
                                        <h2>Cert 1</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                                <div className="comments">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                            </div>
                            <div className="achievemnts">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile

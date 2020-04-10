import React, { Component } from 'react';
import './css/profile.css';
import p from '../components/Images/p.jpg';


export class Profile extends Component {
    render() {
        return (
            <div className="containr">
                    <div className="sidebar">
                        <div className="image">
                            <img src= {p} alt=""/>
                        </div>
                        <div className="intro">
                            <p className="txt">Name:</p>
                            <p className="txt">Lorem Ipsum</p>
                            <p className="txt">Role:</p>
                            <p className="txt">Lorem Ipsum</p>
                            <p className="txt">Email:</p>
                            <p className="txt">Lorem@Ipsum</p>
                            <p className="txt">Phone:</p>
                            <p className="txt">997784 456</p>
                        </div>
                        <div className="connect">
                            <p className="txt">Instagram:</p>
                            <p className="txt">Lorem Ipsum</p>
                            <p className="txt">LinkedIn:</p>
                            <p className="txt">Lorem Ipsum</p>
                            <p className="txt">Twitter:</p>
                            <p className="txt">Lorem@Ipsum</p>
                        </div>
                    </div>


                    <div className="he-cont">
                        <div className="container-1">
                                <div className="bio"><p>Hello. My name is</p>
                            <h1>Amy Pick</h1><p>A full stack all around designer that may or may not include a guide for specific creative potential methods who framing and evaluating moves.</p>
                                </div>
                                <div className="pict">
                                <p>2Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                        </div>
                        <div  className="her-cont">
                            <div className="comments">
                                <p>3Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                            <div className="exp">
                                <p>4Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                            <div className="edu">
                                <p>5Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                            <div className="skills">
                                <p>6Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                    </div>

                </div>
        )
    }
}

export default Profile

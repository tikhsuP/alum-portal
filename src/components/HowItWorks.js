import React, { Component } from 'react'
import a from './Images/about/1.jpg';
import b from './Images/about/2.jpg';
import c from './Images/about/3.jpg';
import d from './Images/about/4.jpg';

export default class S2 extends Component {
    render() {
        return (
            <>
                <section className="page-section" id = "HowItWorks">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">How it Works</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src= {a} alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Step 1</h4>
                  <h4 className="subheading">Believe Yourself & Trust Us</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src= {b} alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                 <h4>Step 2</h4> 
                  <h4 className="subheading">Find the Best Counsellor/ Psychiatrist</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src= {c} alt=""/>
              </div>
              <div className="timeline-panel"> 
                <div className="timeline-heading">
                 <h4>Step 3</h4>
                  <h4 className="subheading">Connect</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src= {d} alt=""/>
              </div>
               <div className="timeline-panel">
                <div className="timeline-heading">
                   <h4>Step 4</h4> 
                  <h4 className="subheading">Spread the Word</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
             </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>Be Part
                  <br/>Of Our
                  <br/>Story!</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
            </>
        )
    }
}

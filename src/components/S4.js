import React, { Component } from 'react'
import creativemarket from './Images/logos/creative-market.jpg';
import designmodo from './Images/logos/designmodo.jpg';
import evanto from './Images/logos/envato.jpg';
import tf from './Images/logos/themeforest.jpg';

export default class S4 extends Component {
    render() {
        return (
            <>
                <section className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src= {tf} alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src= {creativemarket} alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src= {evanto} alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src= {designmodo} alt=""/>
          </a>
        </div>
      </div>
    </div>
  </section>
            </>
        )
    }
}

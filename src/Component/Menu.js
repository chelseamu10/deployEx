import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark" id="mainNav">
            <div className="container">
              <a className="navbar-brand js-scroll-trigger" href="#page-top"><img src="assets/img/navbar-logo.svg" alt="" /></a>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars ml-1" />
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav text-uppercase ml-auto">
                  <li className="nav-item"><NavLink to="/services" className="nav-link js-scroll-trigger">Services</NavLink></li>      
                  <li className="nav-item"><NavLink to="/portfolio" className="nav-link js-scroll-trigger">Portfolio</NavLink></li>      
                  <li className="nav-item"><NavLink to="/about" className="nav-link js-scroll-trigger">About</NavLink></li>      
                  <li className="nav-item"><NavLink to="/team" className="nav-link js-scroll-trigger">Team</NavLink></li>      
                  <li className="nav-item"><NavLink to="/contact" className="nav-link js-scroll-trigger">Contact</NavLink></li>      
                  {/* <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">Services</a></li>
                  <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a></li>
                  <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                  <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#team">Team</a></li>
                  <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Contact</a></li> */}
                </ul>
              </div>
            </div>
          </nav>
        );
    }
}

export default Menu;
import React, { Component } from 'react';
import AboutItem from './AboutItem.js';

class About extends Component {
    render() {
        return (
            <section className="page-section" id="about">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <ul className="timeline">
            <AboutItem image="assets/img/about/1.jpg" title="Our Humble Beginnings" />
            <AboutItem align="timeline-inverted" image="assets/img/about/2.jpg" title="An Agency is Born" />
            <AboutItem image="assets/img/about/3.jpg" title="Our Humble Beginnings" />
            <AboutItem align="timeline-inverted" image="assets/img/about/4.jpg" title="Transition to Full Service" />
            <AboutItem image="assets/img/about/1.jpg" title="Phase Two Expansion" />
            <AboutItem align="timeline-inverted" image="assets/img/about/2.jpg" title="Our Humble Beginnings" />
            
            <li className="timeline-inverted">
                <div className="timeline-image">
                <h4>
                    Be Part
                    <br />
                    Of Our
                    <br />
                    Story!
                </h4>
                </div>
            </li>
            
          </ul>
        </div>
      </section>
        );
    }
}

export default About;
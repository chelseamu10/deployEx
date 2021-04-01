import React, { Component } from 'react';
import TeamItem from './TeamItem.js';
class Team extends Component {
    
    render() {
        
        return (
            
            <section className="page-section bg-light" id="team">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>     
                    <div className="row">
                        <TeamItem image="assets/img/team/1.jpg" name="Tuyết Hạ" position="Manager Human Resource"/>
                        <TeamItem image="assets/img/team/2.jpg" name="Kim Thoa" position="Lead Dev Back-end"/>
                        <TeamItem image="assets/img/team/3.jpg" name="Hoàng Sa" position="Lead Front-end"/>
                        
                    </div>                 
                    <div className="row">
                        
                        <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                    </div>
                </div>
                
            </section>
        );
    }
}

export default Team;
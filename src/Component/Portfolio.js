import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem.js';
import mydb from '../data.json';
class Portfolio extends Component {
    render() {
        return (
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Portfolio</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">
                        {
                            mydb.map((value,key)=>{
                                return(
                                    <PortfolioItem pflID={value.pflID} image={value.image} title={value.title} quote={value.quote}/>
                                )    
                            })
                        }          
                        
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;
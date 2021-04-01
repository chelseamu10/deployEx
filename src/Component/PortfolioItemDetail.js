import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import mydb from '../data.json';
class PortfolioItemDetail extends Component {
    
    render() {
        var pflID = this.props.match.params.pflID;    
        return (
            <div className="container">
            {    
                mydb.map((value,key) => {
                    if(value.pflID == pflID){
                         return(     
                            <div className="jumbotron text-center">
                                <h1 className="display-3">{value.title}</h1>
                                <p className="lead">{value.quote}</p>
                                <img src={value.image} className="img-fluid" style={{width: '100%'}} alt="" />
                                <p>{value.content}</p>
                                <p className="lead">
                                    <Link to="/portfolio" className="btn btn-primary btn-lg" role="button">Back</Link>
                                </p>
                            </div>                          
                         )
                    }
                })               
            }   
            </div>
        )
    }
}

export default PortfolioItemDetail;
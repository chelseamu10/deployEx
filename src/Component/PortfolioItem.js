import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class PortfolioItem extends Component {


    ChangeToSlug = (str) =>{
   

   
        str = str.replace(/^\s+|\s+$/g, ""); // trim
        str = str.toLowerCase();

        // remove accents, swap ñ for n, etc
        var from = "àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ·/_,:;";
        var to = "aaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyd------";

        for (var i = 0, l = from.length; i < l; i++) {
            str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
        }

        str = str
            .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
            .replace(/\s+/g, "-") // collapse whitespace and replace by -
            .replace(/-+/g, "-") // collapse dashes
            .replace(/^-+/, "") // trim - from start of text
            .replace(/-+$/, ""); // trim - from end of text

        return str;
    }
    
    render() {
        return (
            
                <div className="col-lg-4 col-sm-6 mb-4">
                    <div className="portfolio-item">
                        <Link to={"/portfolio-"+this.ChangeToSlug(this.props.title)+"."+this.props.pflID} className="portfolio-link" data-toggle="modal">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                            </div>
                            <img className="img-fluid" src= {this.props.image} alt="" />
                        </Link>
                        <div className="portfolio-caption">
                            <div className="portfolio-caption-heading">{this.props.title}</div>
                            <div className="portfolio-caption-subheading text-muted">{this.props.quote}</div>
                        </div>
                    </div>
                </div>  
        //    http://localhost:3000/portfolio-v-league%20-%20-%20-%20buc%20-%20tranh%20-%20tuoi%20-%20sang%20-%20sau%20-%2020%20-%20nam%20-%20len%20-%20chuyen.2
        );
    }
}

export default PortfolioItem;
import React, { Component } from 'react';

class AboutItem extends Component {
    render() {
        return (
            <li className = {this.props.align}>
              <div className="timeline-image"><img className="rounded-circle img-fluid" src={this.props.image} alt="" /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2009-2011</h4>
                  <h4 className="subheading">{this.props.title}</h4>
                </div>
                <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
              </div>
            </li>
            
        );
    }
}

export default AboutItem;
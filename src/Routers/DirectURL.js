import React, { Children, Component } from 'react';
import Service from '../Component/Service';
import Portfolio from '../Component/Portfolio';
import About from '../Component/About';
import Team from '../Component/Team';

import PortfolioItemDetail from '../Component/PortfolioItemDetail';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";





class DirectURL extends Component {
    
    render() {
        
        return (
            // điều hướng trong đây
        <div>
            
            <Switch>
                <Route exact path="/services">
                    < Service service1="E-Commerce" service2="Responsive Design" service3="Web Security"/>
                </Route>
                <Route exact path="/portfolio" component={Portfolio} />                
                <Route exact path="/portfolio-:slug.:pflID" component={PortfolioItemDetail}/>
                <Route exact path="/about" component={About} />
                <Route exact path="/team" component={Team} />
            </Switch>
           
        </div>
        );
    }
}

function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
  
    return (
      id
    );
  }

export default DirectURL;
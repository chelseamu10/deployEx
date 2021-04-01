import logo from './logo.svg';
import './App.css';
import Menu from './Component/Menu.js';
import Master from './Component/Master.js';
import Footer from './Component/Footer.js';
import DirectURL from './Routers/DirectURL';
import { BrowserRouter as Router, Route, Link, HashRouter } from "react-router-dom";
import MyTable from './table/MyTable';
import {useEffect,useState} from 'react';
import axios from 'axios';

function App() {
  const [province, setProvince] = useState([]);
  

  useEffect(()=>{
    axios.get("https://vapi.vnappmob.com/api/province/").then(res =>{
      setProvince(res.data.results);
    })
  },[])
  return (
    
      <Router>
        <HashRouter >
        <MyTable province = {province}/>
        <div className={logo}>
          < Menu />
          < Master />
          <DirectURL />
          {/* < Service service1="E-Commerce" service2="Responsive Design" service3="Web Security"/> */}
          {/* < Portfolio />
          <About/>
          <Team/> */}
          <Footer/>
        </div>
        </HashRouter>
      </Router>
    
  );
}


export default App;

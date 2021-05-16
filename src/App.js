import {BrowserRouter as Router,MemoryRouter, Route, Link, Switch, Redirect} from 'react-router-dom';
import {createBrowserHistory, createHashHistory} from 'history';

import moment from 'moment';
import sha256 from 'sha256';
import HomePage from './HomePage';
import InfoPage from './InfoPage';
import DetailPage from './DetailPage';
import About from './About';

var ipAddr = '192.168.43.94'
var vnpUrl = 'http://sandbox.vnpayment.vn/paymentv2/vpcpay.html';
var tmnCode = '3OL80KPV';
var secretKey = 'YYEVNYDPGREBCSOASOLRWIIVOPKRYMSP';
var returnUrl = 'http://localhost:3000/detail';
var date = new Date();
var createDate = moment(date).format('YYYYMMDDHHmmss');
var orderId = moment(date).format('HHmmss');
var amount = 15000*100;
var bankCode = 'NCB';
var orderInfo = 'ThanhToanDienNuoc';
var orderType = '25000';
var locale = 'vn';
var currCode = 'VND';

function App() {
  
  const onPaymentClick = () =>{
    const query=`vnp_Amount=${amount}&vnp_BankCode=${bankCode}&vnp_Command=pay&vnp_CreateDate=${createDate}&vnp_CurrCode=${currCode}&vnp_IpAddr=${ipAddr}&vnp_Locale=${locale}&vnp_OrderInfo=${orderInfo}&vnp_OrderType=${orderType}&vnp_ReturnUrl=${returnUrl}&vnp_TmnCode=${tmnCode}&vnp_TxnRef=${orderId}&vnp_Version=2`;

    var secureHash = sha256(secretKey + query);

    vnpUrl += '?' + query + `&vnp_SecureHashType=SHA256&vnp_SecureHash=${secureHash}`;
    
    window.location = vnpUrl;
  }
  
  return (
    <div >
      <button onClick={onPaymentClick}>Thanh toán</button>
          <Link to='/' >Home</Link>
          <Link to='/info' >Info</Link>
          <Link to='/detail' >Detail</Link>
          <Link to='/about' >About</Link>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/info' component={InfoPage} />
            <Route exact path='/detail' component={DetailPage} />
            <Route exact path='/about' component={About} />
            <Route path='*' component={HomePage} />
          </Switch>
    </div>
    //  "start": "react-scripts start",
    // "start": "react-scripts start",
    // "build": "react-scripts build",
    // "start": "webpack serve --mode development --env development",
    // "build": "webpack --mode production",
  );
}

export default App;

import React, { Component } from 'react';

class Footer extends Component {
    Message1 = () => (
                            alert("Đây là biểu tượng twiter")
                        );
    Message2 = () => (
      alert("Đây là biểu tượng Facebook")  
    );

    Message3 = (sympol) => (
        alert("Đây là biểu tượng " + sympol)  
      );
    render() {
        return (
            <footer className="footer py-4">
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-left">Copyright © Your Website 2020</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                    {/* cách 1 onClick={this.Message1}*/}
                    <a className="btn btn-dark btn-social mx-2" href="#!" onClick={() => this.Message1()} ><i className="fab fa-twitter" /></a>
                    <a className="btn btn-dark btn-social mx-2" href="#!" onClick={() => this.Message2()}><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-dark btn-social mx-2" href="#!" onClick={() => this.Message3("Instagram")}><i className="fab fa-linkedin-in" /></a>
                    </div>
                    <div className="col-lg-4 text-lg-right">
                    <a className="mr-3" href="#!">Privacy Policy</a>
                    <a href="#!">Terms of Use</a>
                    </div>
                </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
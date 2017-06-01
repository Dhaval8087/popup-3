import React, { Component } from 'react';
import Loader from 'react-loader-advanced';
let _this;
export default class Socialsignin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isProcessing: false,
            message: ''
        }
        _this = this;
    }
    componentDidMount() {
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: '257940827945954', // ID App
                version: 'v2.3',
                status: true,
                cookie: true,
                xfbml: true
            });
            window.FB.Event.subscribe('auth.statusChange', function (response) {
                // example implementation
                if (response.authResponse) {
                    console.log('Welcome!  Fetching your information.... ');
                    window.FB.api('/me', function (response) {
                        console.log('Good to see you, ' + response.name + '.');
                    });
                } else {
                    console.log('User cancelled login or did not fully authorize.');
                }
            });
        }.bind(this);
        // Load the SDK asynchronously
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    handleFacebook() {
        if (this.state.isProcessing === false) {
            this.setState({ isProcessing: true, message: 'Processing facebook signin' });
            window.FB.login(loginResponse => _this.checkLoginState(loginResponse), true);
        }

    }
    checkLoginState(response) {
        this.setState({ isProcessing: false });
        if (response.authResponse) {
            this.responseApi(response.authResponse);
        } else {
            console.log(response.status);
        }
    };
    responseApi = (authResponse) => {
        window.FB.api('/me', { locale: this.props.language, fields: this.props.fields }, (me) => {
            Object.assign(me, authResponse);
            console.log(me);
        });
    };
    render() {

        return (


            <section className="section-buttons">
                <div className="buttons-content-animate">
                    <div className="item">
                        <Loader show={this.state.isProcessing} message={this.state.message} 
                           backgroundStyle={{ color: 'transparent' }}
                           messageStyle={{"font-size": "30px", "font-weight": 'bold' }}
                           foregroundStyle={{ color: '#ED7D31' }} >
                            <div className="buttons-main active" id="buttonsMain">
                                <a className="facebook" id="fb-root" onClick={this.handleFacebook.bind(this)} disabled={this.state.isProcessing}>
                                    <i className="fa fa-facebook" aria-hidden="true" ></i>
                                    <span>facebook</span>
                                </a>
                                <a className="google" id="authorize-button" dir="ltr">
                                    <i className="fa fa-google" aria-hidden="true"></i>
                                    <span>google</span>
                                </a>
                            </div>
                        </Loader>
                    </div>
                    <div className="item">
                        <div className="input-main" id="formMain">
                            <form id="form">
                                <div>
                                    <input id="emailSignIn" className="email" name="email" placeholder="Email address" required type="email" />
                                </div>
                                <div>
                                    <button id="signInBtn">sign in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
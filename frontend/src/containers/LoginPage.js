import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { message } from 'antd'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Bg from '../images/Ever_logo.png';
import Background from '../components/Background';
import LoginForm from '../components/LoginForm';


class LoginPage extends Component {

    handleValues = async (values) => {
        // submit username and password to authenticate server
        const response = await fetch(process.env.REACT_APP_AUTH_DOMAIN + '/api/login', {
            body: JSON.stringify(values),
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'include', // include, same-origin, *omit
            headers: new Headers({
                'user-agent': 'Mozilla/5.0 JackLLLLL@Coincc',
                'content-type': 'application/json'
            }),
            method: 'POST',
            mode: 'cors', // no-cors, cors, *same-origin,
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // *client, no-referrer
        })

        // if login successfully
        if (response.status === 200) {
            message.success('Login Successfully! Redirecting to account page ...')
            // get JWT token from response body
            const resBody = await response.json();

            // store it into session storage // TODO: store in cookie to prevent XSS // jwt-token now in cookie but not session storage
            window.sessionStorage.setItem("jwt", resBody.data.token);

            // put user info into session storage
            const keystore = JSON.parse(resBody.data.keystore);
            if ('seedPhrase' in keystore) {
                window.sessionStorage.setItem("seed?Phrase", keystore.seedPhrase)
                window.sessionStorage.setItem("address", JSON.parse(resBody.data.keystore).address);
            } else {
                window.sessionStorage.setItem("address", '0x' + JSON.parse(resBody.data.keystore).address);
            }
            
            window.sessionStorage.setItem("key?store", resBody.data.keystore);
            window.sessionStorage.setItem("username", resBody.data.username);              

            // redirect
            this.props.history.push({ pathname: "/user/account" });                    
        } else { // failed
            message.error('Username or password incorrect')
        }
    }

    render () {
        return ( 
            <div className="loginpage">
                <Header/>
                <LoginForm handleValues={(values) => { this.handleValues(values) }}/>
                <Background image={Bg}/>
                <Footer/>
            </div>
        )
    }
}

export default withRouter(LoginPage);

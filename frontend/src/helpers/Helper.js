import { message } from 'antd';
import { createHmac } from 'crypto';  


/***  FUNCTIONS FOR BACKEND SERVER COMMUNICATION  ***/

export const CheckLogin = async () => {
    // if jwt not in session storage
    const jwt = window.sessionStorage.getItem('jwt');
    if (!jwt) {
        return false
    }

    // submit username and password to authenticate server
    const response = await fetch(process.env.REACT_APP_AUTH_DOMAIN + '/api/login', {
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'include', // include, same-origin, *omit
        headers: {
            'user-agent': 'Mozilla/5.0 JackLLLLL',
            'content-type': 'application/json',
            'Authorization': jwt
        },
        method: 'GET',
        mode: 'cors', // no-cors, cors, *same-origin,
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // *client, no-referrer
    })

    // if login successfully
    if (response.status === 200) {
        message.success('Login state verified')
        // get JWT token from response body
        const resBody = await response.json()

        // store it into session storage // TODO: store in cookie to prevent XSS // TODO: refresh jwt
        window.sessionStorage.setItem("jwt", resBody.data.token);

        return resBody;      
    } else { // failed
        const resBody = await response.json();
        // error message as notification
        if (resBody.message === 'jwt expired') {
            // remove expired jwt  TODO: refresh jwt instead
            window.sessionStorage.removeItem("jwt");
            window.sessionStorage.removeItem("username");

            message.error('You have automaticlly logged out after 10 mins')
        } else {
            message.error(resBody.message)
        }
        
        return false
    }
}

export const GetAllTickets = async () => {
    // get all ticket data from server
    const response = await fetch(process.env.REACT_APP_AUTH_DOMAIN + '/api/ticket', {
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'omit', // include, same-origin, *omit
        headers: {
            'user-agent': 'Mozilla/5.0 JackLLLLL',
            'content-type': 'application/json',
        },
        method: 'GET',
        mode: 'cors', // no-cors, cors, *same-origin,
    })

    // if data successfully fetched
    if (response.status === 200) {
        // get JWT token from response body
        const resBody = await response.json()
        return resBody.data;

    } else { // failed
        return [{id: 0}]
    }
} 

/***  FUNCTIONS FOR DATA FORMATTING  ***/

export const IsPhone = () => {
    const userAgent = navigator.userAgent;
    if (userAgent.indexOf('Android') > -1 || userAgent.indexOf('iPhone') > -1) {
        return true
    } else {
        return false
    }
}

/***  FUNCTIONS FOR ENCRYPTION  ***/

export const SaltHash = (data, salt) => {
    const hash = createHmac('sha256', salt)
    hash.update(data);
    return hash.digest('hex')
}

/***  FUNCTIONS FOR COMPONENTS  ***/

export const shuffle = (array) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex = 0;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
  
    return array;
}
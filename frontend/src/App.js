import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';


// // async loading - Split Code
// import AsyncComponent from './components/AsyncComponent';
// const HomePage = AsyncComponent(() => import('./containers/HomePage'));
// const LoginPage = AsyncComponent(() => import('./containers/LoginPage'))
// const NoMatchPage = AsyncComponent(() => import('./containers/NoMatchPage'))


// class App extends Component {
//     render() {
//         return (
//             <BrowserRouter>
//                 <Switch>
//                     <Route path="/home" component={HomePage}/>
//                     <Route path="/login" component={LoginPage}/>
//                     <Route component={NoMatchPage}/>
//                 </Switch>
//             </BrowserRouter>   
//         );
//     }
// }


// one-time loading
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import NoMatchPage from './containers/NoMatchPage';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch location={location}>
                    <Route exact path="/home" component={HomePage} key="homepage"/>
                    <Route exact path="/user/login" component={LoginPage} key="loginpage"/>
                    <Route component={NoMatchPage}/>
                </Switch>
            </BrowserRouter>   
        );
    }
}

export default App;

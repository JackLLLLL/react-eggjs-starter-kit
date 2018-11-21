import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Bg from '../images/404-bg.jpg';
import Background from '../components/Background';


const NoMatchPage = () => {
    return (
        <div className="homepage">
            <Header/>
            <Background image={Bg}/>
            <Footer/>
        </div>

    );
}

export default NoMatchPage;

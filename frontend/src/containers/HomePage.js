import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Bg from '../images/bg.jpg';
import Background from '../components/Background';


const HomePage = () => {
    return (
        <div className="homepage">
            <Header/>
            <Background image={Bg}/>
            <Footer/>
        </div>
    );
}

export default HomePage;

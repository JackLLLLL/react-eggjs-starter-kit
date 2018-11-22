import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Bg from '../images/bg.jpeg';
import Fish from '../images/fish.png';
import Background from '../components/Background';


const HomePage = () => {
    return (
        <div className="homepage">
            <Header/>
            <div
                style={{
                    textAlign: 'center',
                    fontSize: '10vmin',
                    letterSpacing: '1.5vmin',
                    WebkitTextStroke: '1vmin #5cc',
            }}>
                React Eggjs Starter Kit
            </div>
            <img className="shake-chunk shake-constant" style={{ width: '15vw', marginLeft: '25vw' }} src={Fish}/>
            
            <Background image={Bg}/>
            <Footer/>
        </div>
    );
}

export default HomePage;

import React from 'react';


const Background = ({image, opacity, backgroundColor}) => {
    return (
        <div className="background" 
            style={{ 
                backgroundImage: `url(${image})`, 
                backgroundColor: backgroundColor,
                opacity: opacity, 
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat', 
                backgroundSize: 'cover',
                height: window.innerHeight + 302,   // height of safari keyboard 
                width: '100%', 
                zIndex: -1,
                position: 'fixed', 
                top: '-5vw'
            }}/> 
    )
}
export default Background;
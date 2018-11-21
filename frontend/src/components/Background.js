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
                height: window.innerHeight + 302,   // height of safari keyboard 
                width: '100%', 
                zIndex: -1,
                position: 'fixed', 
                bottom: 0 
            }}/> 
    )
}
export default Background;
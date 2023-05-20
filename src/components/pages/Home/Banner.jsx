import React from 'react';

const Banner = ({ children, image }) => {
    return (
        <div className="hero h-[650px] md:relative rounded-xl md:my-16" style={{ backgroundImage: `url(${image})` }}>
            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
            {children}
        </div>

    );
};

export default Banner;
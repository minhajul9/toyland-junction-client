import React from 'react';

const Banner = () => {
    return (
        <div className="hero h-[600px] md:relative rounded-xl" style={{ backgroundImage: `url("https://i.ibb.co/fXRPjNn/small-red-car-toy-kid-child-playing-with-it.jpg")` }}>
            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
            <div className="hero-content absolute md:left-48 top-40 md:top-30 text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Toyland Junction</h1>
                    <p className="mb-5">Discover the Joy of Play,<br />
                        Where Imagination Takes Flight.<br />
                        A Wonderland for Kids, both Big and Small,<br />
                        Where Little Dreams Grow, Standing Tall.<br />
                        From Tiny Treasures to Big Adventures,<br />
                        Find the Magic in Every Creation.<br />
                        Explore, Dream, and Let Your Spirit Shine,<br />
                        At our Toy Shop, where Worlds Align!</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
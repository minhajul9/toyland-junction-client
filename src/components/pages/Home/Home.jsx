import React from 'react';
import Banner from './Banner';
import ShopByCategory from './ShopByCategory';
import Gallery from './Gallery';
import useTitle from '../../../Hook/useTitle';

const Home = () => {
    useTitle("Toyland Junction")
    return (
        <div>
            <Banner image='https://i.ibb.co/fXRPjNn/small-red-car-toy-kid-child-playing-with-it.jpg'>
                <div className="hero-content absolute md:left-48 top-40 md:top-30 text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-white text-5xl font-bold">Toyland Junction</h1>
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
            </Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <Banner image='https://i.ibb.co/QFNf8Yw/Marvel-Legends.jpg'>
                <div className="hero-content absolute md:left-50 top-40 md:top-30 text-neutral-content mb-16">
                    <div className=" text-center">
                        <h1 className="mb-5  text-white text-5xl font-bold">CheckOut other Toys collection</h1>

                        <button className="btn btn-primary mt-8">Get Started</button>
                    </div>
                </div>
            </Banner>
        </div>
    );
};

export default Home;
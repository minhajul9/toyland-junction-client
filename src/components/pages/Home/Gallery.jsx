import Marquee from "react-fast-marquee";

const Gallery = () => {
    return (
        <div className="my-24">
            <h1 className="text-4xl font-bold my-8">
                Gallery
            </h1>
            
            <Marquee>
                <img className="w-48 mx-8" src="https://i.ibb.co/8cWNCFb/1-removebg-preview.png" alt="" />

                <img className="w-48 mx-8" src="https://i.ibb.co/PNg63bG/41v-X8zk-Rsc-L-removebg-preview.png" alt="" />

                <img className="w-48 mx-8" src="https://i.ibb.co/Sf6Jrtf/71c-D80y87z-L-SL1500-removebg-preview.png" alt="" />

                <img className="w-48 mx-8" src="https://i.ibb.co/ynzSzkw/9529276-R-SET-removebg-preview.png" alt="" />

                <img className="w-48 mx-8" src="https://i.ibb.co/h11wMd5/57000544-removebg-preview.png" alt="" />

                <img className="w-48 mx-8" src="https://i.ibb.co/7Xh72GL/mtc-bbh-0003-r-megastar-licensed-12v-mercedes-amg-classy-jeep-red-1632403737-removebg-preview.png" alt="" />
            </Marquee>

        </div>
    );
};

export default Gallery;
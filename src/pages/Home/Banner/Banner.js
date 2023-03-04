import React from 'react';
import banner from "../../../assets/banner.png";
import Search from '../../../components/Search/Search';

const Banner = () => {
    return (
        <>
            <div className='flex lg:flex-row flex-col container mx-auto justify-center items-center px-6'>
                <div className="">
                    <img className="w-full object-cover" src={banner} alt="banner" />
                </div>

                <div>
                    <h1 className="md:text-7xl text-5xl font-bold mb-4 text-secondary font-varela">
                        <span className="text-primary">HEALTHY</span> FOOD.
                    </h1>
                    <h1 className="md:text-6xl text-5xl font-bold text-secondary font-varela">
                        SIMPLY <span className="text-primary">DELICIOUS.</span>
                    </h1>
                    <span className='text-lg mt-6 inline-block font-poppins'>
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Aenean eleifend laoreet congue.
                    </span>
                </div>
            </div>
            <Search />
        </>
    );
};

export default Banner;
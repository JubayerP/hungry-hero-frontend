import { Input } from '@material-tailwind/react';
import React from 'react';
import { BiRestaurant } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";

const Search = () => {
    return (
        <div className="flex md:flex-row flex-col justify-between px-6 container mx-auto items-center border bg-primary text-base py-14 md:my-0 my-10 space-y-6">
            <div>
                <span className='font-varela text-lg'>FIND THE BEST RESTAURANTS, CAFES, AND BARS IN BANGLADESH.</span>
            </div>
            <div className="flex sm:flex-row flex-col items-center gap-6 md:w-auto w-full md:space-y-0 space-y-4">
                <Input label='Restaurant' size="lg" className='bg-base' icon={<BiRestaurant size={20} />} />
                <Input label="Location" size="lg" className='bg-base' icon={<CiLocationOn size={20} />} />
            </div>
        </div>
    );
};

export default Search;
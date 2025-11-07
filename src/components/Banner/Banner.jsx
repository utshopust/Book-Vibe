import React from 'react';
import bookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-around items-center p-16 w-full mx-auto'>
            <div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <button className='btn btn-primary'>Test Test</button>
            </div>
            <div>
                <img className='w-3/5' src={bookImage} alt="Book-Image" />
            </div>
        </div>
    );
};

export default Banner;
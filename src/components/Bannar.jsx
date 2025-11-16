import React from 'react';
import bannar from '../assets/Screenshot.png'

const Bannar = () => {
    return (
        <div className='w-[90%] mx-auto flex justify-center py-10'>
            <img className='w-[950px]' src={bannar} alt="" />
        </div>
    );
};

export default Bannar;
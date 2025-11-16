import React from 'react';
import logo from '../assets/logo.png'

const Navbar = ({availableBalance}) => {
    return (
        <div className='w-[90%] mx-auto py-5'>
            <section className='flex justify-between items-center'>
                <div>
                    <img src={logo} alt="logo" />
                </div>

                <div className='flex gap-20 items-center'>
                    <div className='flex list-none gap-10'>
                        <li><a className='text-xl text-gray-400' href="##">Home</a></li>
                        <li><a className='text-xl text-gray-400' href="##">Fixture</a></li>
                        <li><a className='text-xl text-gray-400' href="##">Teams</a></li>
                        <li><a className='text-xl text-gray-400' href="##">Schedules</a></li>
                    </div>

                    <div className='border-2 border-amber-400 bg-gray-100 rounded-md px-7 py-3'>
                        <span className='text-blue-800 font-bold'>{availableBalance} Taka</span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Navbar;
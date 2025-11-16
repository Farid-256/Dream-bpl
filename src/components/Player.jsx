import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Player = ({ player, availableBalance, setAvailableBalance, myPlayers, setMyplayers }) => {


    const [isSeclect, setIsSeclect] = useState(false)

    const handleSeclectButton = (playerData) => {

        if (myPlayers.length >= 6) {
            toast.error("You already selected six players!");
            return;
        }
        
        if (availableBalance < playerData.price) {
            alert('Not Available Balance !!!')
            return
        }

        if (!isSeclect) {
            alert(`Are You Want to But This Player?? Price:  ${playerData.price} Taka`)
        }

        setIsSeclect(prev => !prev)

        setAvailableBalance(prev => prev - playerData.price)

        setMyplayers([...myPlayers, playerData])


    }


    return (
        <div>
            <div className={`card bg-base-100 w-96 shadow-xl p-2 border border-amber-100 ${isSeclect ? 'bg-red-100' : ''}`}>
                <figure>
                    <img className='w-[420px] h-[440px] object-cover' src={player.image} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{player.name}</h2>

                    <div className='flex justify-between items-center'>
                        <h2 className='font-bold'>{player.country} </h2>
                        <button className='font-bold'>{player.role}</button>
                    </div>

                    <div>
                        <h3 className='font-bold'>Rating: {player.rating} </h3>
                    </div>

                    <div>
                        <h3 className='font-bold'>Playing Style: {player.battingStyle} </h3>
                    </div>
                    <hr className='text-amber-200 py-2'></hr>

                    <div className="flex justify-between items-center">
                        <h3 className='font-bold'>Price:{player.price} Taka</h3>

                        <button disabled={isSeclect} onClick={() => handleSeclectButton(player)} className='border border-gray-300 rounded-md px-5 py-2 cursor-pointer'> {isSeclect === true ? 'Sold Out' : 'Choose Player'} </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;
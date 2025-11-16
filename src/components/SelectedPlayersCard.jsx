import React from 'react';
import deleteIcon from '../assets/Vector-(1).png'

const SelectedPlayersCard = ({ player, handleDeletePlayer, handleAvavilablesPlayers }) => {

    const handleRemovePlayer = () => {
        handleDeletePlayer(player)
    }

    return (
        <div>
            <section className='border border-gray-300 p-2 rounded-md flex items-center justify-between mb-5'>
                <div className='flex items-center gap-3'>
                    <img className='w-[70px] h-[75px] object-cover' src={player.image} alt="img" />

                    <div>
                        <h3 className='text-2xl font-bold pb-3'>{player.name}</h3>
                        <p className='text-gray-400'>{player.role}</p>
                    </div>
                </div>

                <div className='mr-5'>
                    <img onClick={handleRemovePlayer} src={deleteIcon} alt="" />
                </div>
            </section>


            <button onClick={handleAvavilablesPlayers} className='bg-amber-400 px-5 py-2 rounded-xl text-blue-700 cursor-pointer hover:bg-amber-300'>Available
            </button>

        </div>

    );
};

export default SelectedPlayersCard;
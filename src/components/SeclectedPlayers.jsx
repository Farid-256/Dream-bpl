import React from 'react';

import SelectedPlayersCard from './SelectedPlayersCard';

const SeclectedPlayers = ({ myPlayers, handleDeletePlayer, handleAvavilablesPlayers }) => {

    return (
        <div className='w-[90%] mx-auto'>

            {
                myPlayers.map(player => <SelectedPlayersCard handleAvavilablesPlayers={handleAvavilablesPlayers} handleDeletePlayer={handleDeletePlayer} player={player}></SelectedPlayersCard>)
            }
           
        </div>
    );
};

export default SeclectedPlayers;
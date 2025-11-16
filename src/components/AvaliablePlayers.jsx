import React, { use } from 'react';
import Player from './Player';

const AvaliablePlayers = ({dataPromise, availableBalance, setAvailableBalance, myPlayers, setMyplayers}) => {
    const players = use(dataPromise)

    return (
        <div className='w-[90%] mx-auto grid grid-cols-3 gap-8'>
            {
                players.map(player => <Player myPlayers={myPlayers} setMyplayers={setMyplayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} key={player.id} player={player}></Player>)
            }
        </div>
    );
};

export default AvaliablePlayers;
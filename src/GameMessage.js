import React from 'react';

export default function GameMessage (props){
    return(
        <div id="game-message">
            <h2>{props.message}</h2>
        </div>
    );
}

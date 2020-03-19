import React from 'react';
import GameTitle from './GameTitle.js';
import GameBoard from './GameBoard.js';
import GameMessage from './GameMessage.js';
import GameInterface from './GameInterface.js';

export default class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message:"X's Turn"
        }
    }
    setMessage = (e) =>{
        this.setState({message:e})
    };
    reset = () => {
        this.game.reset();
    };

    render() {
        return (
            <div id="game">
                <GameTitle/>
                <GameBoard ref={game => this.game = game} onchange={this.setMessage}/>
                <GameMessage message={this.state.message}/>
                <GameInterface onClick={this.reset}/>
            </div>
        );
    }

}

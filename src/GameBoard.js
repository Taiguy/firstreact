import React from 'react';
import GameCel from './GameCel.js';

export default class GameBoard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            board: ['?', '?', '?', '?', '?', '?', '?', '?', '?']
        }
        this.counter = 0;
    }

    handleClick = (i) =>{
        let board = this.state.board;
        if(this.state.board[i] === '?'){
            if(this.counter % 2 === 0){
                board[i] = "X";
                this.props.onchange("O's Turn");
                this.counter++;
            }else if(this.counter % 2 === 1){
                board[i] = "O";
                this.props.onchange("X's Turn");
                this.counter++;
            }
            this.setState({board:board});
            if(this.checkWin()){
                this.counter = 0.5;
            }

        }
    };

    checkWin(){
        if(
            this.state.board[0]+this.state.board[1]+this.state.board[2] === "XXX" ||
            this.state.board[3]+this.state.board[4]+this.state.board[5] === "XXX" ||
            this.state.board[6]+this.state.board[7]+this.state.board[8] === "XXX" ||
            this.state.board[0]+this.state.board[3]+this.state.board[6] === "XXX" ||
            this.state.board[1]+this.state.board[4]+this.state.board[7] === "XXX" ||
            this.state.board[2]+this.state.board[5]+this.state.board[8] === "XXX" ||
            this.state.board[0]+this.state.board[4]+this.state.board[8] === "XXX" ||
            this.state.board[2]+this.state.board[4]+this.state.board[6] === "XXX"){
            this.props.onchange("X Wins!");
            return true;
        }else if(
            this.state.board[0]+this.state.board[1]+this.state.board[2] === "OOO" ||
            this.state.board[3]+this.state.board[4]+this.state.board[5] === "OOO" ||
            this.state.board[6]+this.state.board[7]+this.state.board[8] === "OOO" ||
            this.state.board[0]+this.state.board[3]+this.state.board[6] === "OOO" ||
            this.state.board[1]+this.state.board[4]+this.state.board[7] === "OOO" ||
            this.state.board[2]+this.state.board[5]+this.state.board[8] === "OOO" ||
            this.state.board[0]+this.state.board[4]+this.state.board[8] === "OOO" ||
            this.state.board[2]+this.state.board[4]+this.state.board[6] === "OOO") {
            this.props.onchange("O Wins!");
            return true;
        }else if(this.counter > 8){
            this.props.onchange("It's a Tie");
            return true;
        }else{
            return false;
        }

    }

    reset = () =>{
        this.setState({board:['?', '?', '?', '?', '?', '?', '?', '?', '?']});
        this.counter = 0;
        this.props.onchange("X's Turn");
    };

    render() {
        return (
            <div id="game-board">
                {this.state.board.map((value,i) => {
                        return (
                            <GameCel i={i} value={value} onChange={this.handleClick}/>
                        );
                    }
                )}
            </div>
        );
    }


}
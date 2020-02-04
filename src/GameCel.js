import React from 'react';

export default class GameCel extends React.Component{
    handleClick = () =>{
        this.props.onChange(this.props.i);
    }

    render(){
        return(
            <div className="game-cel" onClick={this.handleClick}>
                <h2>{this.props.value}</h2>
            </div>
        );
    }
}

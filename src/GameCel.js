import React from 'react';

export default class GameCel extends React.Component{
    constructor(props) {
        super(props);
    }
    handleClick = () =>{
        this.props.onChange(this.props.i);
    }

    render(){
        let cursor = "pointer";
        if(this.props.value !== '?'){
            cursor = "default";
        }
        return(
            <div className="game-cel" onClick={this.handleClick} style={{"cursor":cursor}}>
                <h2>{this.props.value}</h2>
            </div>
        );
    }
}

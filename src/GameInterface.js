import React from 'react';

export default class GameInterface extends React.Component{
    render() {
        return (
            <div id="game-interface">
                <button onClick={this.props.onClick}>
                    <h2>RESET</h2>
                </button>
            </div>
        );
    }
}
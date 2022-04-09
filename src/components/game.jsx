import React, { Component } from 'react';
import Board from './board';
import calculateWinner from './calculateWinner';


class Game extends Component{

    constructor(props) {
        super(props);
        this.state = {
            history : [{
                squares : Array(9).fill(null), 
            }],
            stepNumber : 0,
            turnX : true
        }
    }

    /**
     * making a onclick event handler and passing to
     * the square component as a prop
     * 
     * --> if winner selected or square already filled
     * --> else change the state
    */
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1]
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.turnX ? 'X' : 'O';

        this.setState({
            history : history.concat([{
                squares : squares
            }]),
            stepNumber : history.length, 
            turnX : !this.state.turnX
        });
    }

    /**
     * button onClick event will change the state.stepNumber 
     * which will help in history.slice(0, stepNumber)
    */
    jumpTo(step) {
        this.setState({
            stepNumber : step, 
            turnX : (step % 2) === 0, 
        })
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber]
        const winner = calculateWinner(current.squares);

        /**
         * mapping moves to list of button
        */
        const moves = history.map((item, index) => {
            let description = index ? 'Go to move: ' + index : 'Go to start';
            return (
                <li key={index}>
                    <button className='btn btn-info' onClick={() => this.jumpTo(index)}>{description}</button>
                </li>
            );
        });

        /**
         * rendering status info
        */
        let status;
        if (winner) {
            status = 'Winner:  ' + winner;
        }
        else {
            status = 'Next player: ' + (this.state.turnX ? 'X' : 'O');
        }

        /**
         * rendering game board and moves list
        */
        return (
            <div className='game'>
                <div className='game-board'>
                    <Board squares={current.squares} onClick={(i) => this.handleClick(i)}/>
                </div>
                <div className='game-info'>
                    <div className='status'>{status}</div>
                    <ul>{moves}</ul>
                </div>
            </div>
        )
    }
}


export default Game;
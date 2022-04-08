import React, { Component } from 'react';
import Square from './square';

class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            squares : Array(9).fill(null), 
            turnX : true
        }
    }


    handleClick(i) {
        const squares = this.state.squares.slice();

        // if winner selected or square already filled
        if (this.calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.turnX ? 'X' : 'O';
        this.setState({
            squares : squares, 
            turnX : !this.state.turnX
        });
    }

    /**
     * rendering the squares using the square components
    */
    renderSquare(i) {
        return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
    }

    /**
     * calculating the game winner
    */
    calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }


    /**
     * render the squares and the status
    */
    render() {
        const winner = this.calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = "Winner : " + winner; 
        }
        else {
            status = "NEXT PLAYER: " + (this.state.turnX ? 'X' : 'O');
        }

        return(
            <div className='center topMargin'>
                <div>
                    <div className='status'>{status}</div>
                    <div className='boardRow'>
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>
                    <div className='boardRow'>
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </div>
                    <div className='boardRow'>
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </div>
                </div>
            </div>
        );
    }
}



export default Board;
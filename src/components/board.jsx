import React, { Component } from 'react';
import Square from './square';

class Board extends Component {

    /**
     * rendering the squares
     * @param i : index of the square array
    */
    renderSquare(i) {
        return <Square value={ this.props.squares[i] } onClick={() => this.props.onClick(i)} />;
    }


    /**
     * render the squares
    */
    render() {
        return(
            <div className='center topMargin'>
                <div>
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
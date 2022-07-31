import React from 'react';
import ToneSquare from './ToneSquare';

const buildState = (rowCount, colCount) => {
    const area = rowCount * colCount;
    const matrix = {};
    for (let key = 1; key <= area; key++) {
        const calcBeat = key % colCount;
        matrix[key] = {
            active: false,
            beat: (calcBeat === 0 ? 1 : (colCount - calcBeat) + 1),
        };
    }
    return matrix;
};

class ToneMatrix extends React.Component {
    constructor(props) {
        super(props);
        const initRow = 8;
        const initCol = 8;
        this.loop = null;
        this.state = {
            rowCount: initRow,
            colCount: initCol,
            beat: 0,
            playing: false,
            speed: 125,
            matrix: buildState(initRow, initCol),
        };
        this.handleClick = this.handleClick.bind(this);
    }

    buildRow(rowIdx, colCount, rows = []) {
        if (rowIdx > 0) {
            const idx = rowIdx * colCount;
            rows.push(this.buildSquare(idx, rowIdx, colCount));
            return this.buildRow(rowIdx - 1, colCount, rows);
        }
        return rows;
    }

    buildSquare(idx, rowIdx, colCount, row = []) {
        if (colCount > 0) {
            const square = this.state.matrix[idx];
            row.push(ToneSquare({
                key: idx,
                active: square.active,
                handleClick: this.handleClick,
                beat: square.beat,
                current: (square.beat === this.state.beat ? true : false)
            }));
            return this.buildSquare(idx - 1, rowIdx, colCount - 1, row);
        }
        return (<div key={'row-' + rowIdx}>{row}</div>);
    }
    
    handleClick(e) {
        const matrix = this.state.matrix;
        const id = e.target.id;
        matrix[id].active = !matrix[id].active;
        this.setState({ matrix });
    }

    render() {
        return (
            <div className="text-center mt-5">
                {this.buildRow(this.state.rowCount, this.state.rowLength)}
            </div>
        );
    }
}

export default ToneMatrix;
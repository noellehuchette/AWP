import React, { Component } from 'react';
import * as Tone from 'tone';

class ToneApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialized: false,
            playing: false,
            rows: 16,
            cols: 16,
            beat: 0,
            tempo: 120,
        };
    }

    init() {

    }

    start() {

    }

    stop() {

    }

    handleClick() {

    }

    handleChange() {

    }

    render() {
        return (
            <div className = 'ToneApp'>
            </div>
        );
    }
}

export default ToneApp;
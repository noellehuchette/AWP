import React from 'react';
import * as Tone from 'tone';

const synth = new Tone.Synth().toDestination();
Tone.Transport.setLoopPoints(0,'1m');
Tone.Transport.loop = true;

const loopA = new Tone.Loop(time => {
    synth.triggerAttackRelease('D3', '16n', time);
}, '4n').start(0);

const poly = new Tone.PolySynth(Tone.Synth).toDestination();


class ToneLab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false,
        };
        this.play = this.play.bind(this);
        this.stop = this.stop.bind(this);
    }

    toot() {
        synth.triggerAttackRelease('F#3', '8n', Tone.now());
    }
    
    play() {
        Tone.Transport.start();
        const playing = true;
        this.setState({playing});
    }
    
    stop() {
        Tone.Transport.stop();
        const playing = false;
        this.setState({playing});
    }

    render() {
        return (
            <div className='tonelab'>
            <div>
                <button onClick={this.toot}>toot</button>
            </div>
            
            <div>
                {this.state.playing ?
                    (<button onClick={this.stop}>stop</button>) :
                    (<button onClick={this.play}>play</button>) }
            </div>
        </div>
        );
    }
};

export default ToneLab;
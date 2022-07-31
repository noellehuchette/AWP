import React from 'react';
import * as Tone from 'tone';
import ToneSynth from './ToneSynth';
import ToneSeq from './ToneSeq';
import ToneControls from './ToneControls';

const testNotes = ['D5', 'C4', 'A4', 'G4', 'F4', 'D4', 'C3', 'A3', 'G3', 'F3', 'D3', 'C2', 'A2', 'G2', 'F2', 'D2']

const testSynth = () => {
    return new Tone.Synth().toDestination();
};

const buildSynths = (count = 16) => {
    const synths = [];
    for (let i = 0; i < count; i++) {
        synths.push(testSynth());
    }
    return synths;
};

const buildGrid = (notes = testNotes) => {
    const rows = [];
    for (const note of notes) {
        const row = [];
        for (let i = 0; i < 16; i++) {
            row.push({
                note: note,
                isActive: false,
            });
        }
        rows.push(row);
    }
    return rows;
};

class ToneIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            started: false,
            playing: false,
            beat: 0,
            grid: buildGrid(),
            synths: buildSynths(),
            tempo: 120,
        }
    }

    loop() {
        const repeat = (time) => {
            this.state.grid.forEach((row, idx) => {
                let synth = this.state.synths[idx];
                let note = row[this.state.beat];
                if(note.isActive) {
                    synth.triggerAttackRelease(note.note, '8n', time);
                }
            })
            let beat = (this.state.beat + 1) % 16;
            this.setState({beat});
        }
        Tone.Transport.bpm.value = this.state.tempo;
        Tone.Transport.scheduleRepeat(repeat, '8n');
    }

    render() {
        return (
            <div className='tone-block'>
        Tone
        <ToneControls />
        <ToneSynth />
        <ToneSeq />
    </div>
        );
    }
};

export default ToneIndex;
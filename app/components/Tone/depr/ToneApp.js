import React, { useCallback, useState, useEffect } from 'react';
import * as Tone from 'tone';

const notes = [
  'D5',
  'C4',
  'A4',
  'G4',
  'F4',
  'D4',
  'C3',
  'A3',
  'G3',
  'F3',
  'D3',
  'C2',
  'A2',
  'G2',
  'F2',
  'D2',
];

const initPattern = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const synth = new Tone.Synth().toDestination();

const ToneApp = (props) => {
  const [playState, setPlayState] = useState(Tone.Transport.state);
  const [liveCol, setCol] = useState(0);
  const [pattern, updatePattern] = useState(initPattern);
  const [initState, setInit] = useState(false);

  useEffect(
    () => {
      const loop = new Tone.Sequence(
        (time, col) => {
          setCol(col);
          pattern.map((row, nidx) => {
            if (row[col]) {
              synth.triggerAttackRelease(notes[nidx], '8n', time);
            }
          });
        }
      );
    },
    [pattern]
  );
  
  const init = useCallback(() => {
    Tone.start();
  },[]);

  const toggle = useCallback(() => {
    Tone.Transport.toggle();
    setPlayState(Tone.Transport.state);
  }, []);

  function setPattern({ x, y, val }) {
    const patt = [...pattern];
    patt[y][x] = +!val;
    updatePattern(patt);
  }

  return (
    <div>
      {pattern.map((row, y) => (
        <div key={y} style={{ display: "flex", justifyContent: "center" }}>
          {row.map((value, x) => (
            <Square
              key={x}
              active={liveCol === x}
              selected={value}
              onClick={() => setPattern({ x, y, value })}
            />
          ))}
        </div>
      ))}
      <div onClick={() => toggle()}>{playState}</div>
    </div>
  );
};

const Square = ({ active, value, onClick }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 25,
      height: 25,
      background: value ? "#999" : "",
      border: active ? "1px solid #999" : "1px solid #eee"
    }}
    onClick={onClick}
  >
    {value}
  </div>
);


export default ToneApp;
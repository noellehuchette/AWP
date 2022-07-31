import React from 'react';
import * as Tone from 'tone';

const ToneControls = (props) => {
    return(
        <div className='transport-controls'>
        <button className='play-btn'>▶</button>
        <button className='pause-btn'>⏸</button>
        <button className='stop-btn'>⏹</button>
        <input type='range' id='tempo' name='tempo' min='20' max='420' step='2' />
        </div>    
    );
};

export default ToneControls;
import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from './Elements/Navbar';
import ToneApp from './Tone/depr/ToneApp';
import ToneLab from './Tone/depr/ToneLab';

const Routes = () => {
  return (
    <div>
      <Navbar />
      <ToneApp />
      <ToneLab />
      <div>
        <Router>
        router
        </Router>
      </div>
    </div>
  );  
};

export default Routes;
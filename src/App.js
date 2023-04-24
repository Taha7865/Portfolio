import React, { useState } from 'react';
import Header from './Header';
import Body from './Body';
import Navbar from './Navbar';
import "./index.css";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
//import Sticky from 'react-stickynode';


function App() {
  
    const [flip, setFlip] = useState(false);
    const props = useSpring({
      to:{opacity: 1},
      from: {opacity: 0},
      delay:200,
    });
    return (
   
    <div>
      
      <Navbar/>
      
        
        <animated.div style = {props}><Header/></animated.div>
      </div>
        
      
      
      
      
      
      
  );
}

export default App;

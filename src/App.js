import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import "./index.css";
import { useSpring, animated } from 'react-spring';
//import Sticky from 'react-stickynode';


function App() {
  
  
    const props = useSpring({
      to:{opacity: 1},
      from: {opacity: 0},
      delay:200,
    });
    return (
   
    <div>
      <div className="hidden md:block">
        <Navbar />
      </div>
        
        <animated.div style = {props}><Header/></animated.div>
      </div>
        
      
      
      
      
      
      
  );
}

export default App;

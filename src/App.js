import React from 'react';
import './styles/app.css';
import Maincomponent from './Components/Maincomponent'
import Courses from './Components/Courses'
import Aboutcodeme from './Components/Aboutcodeme';
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import Teammain from './Components/Teammain';

function App() {
  return (
      <ReactFullpage
        navigation
        scrollOverflow={true}
        render={({ state, fullpageApi }) => {
          return (
            <div>
              <div className="section">
              <Maincomponent/>
              </div>
              <div className="section">
              <Courses/>
              </div>
              <div className="section">
              <Aboutcodeme/>

               </div>
               <div className="section">
               <Teammain/>
               </div>
            </div>
          );
        }}
      />
     
      
     
    
  );
}

export default App;

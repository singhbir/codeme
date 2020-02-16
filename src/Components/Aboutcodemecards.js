import React from 'react'
import qperson from '../assets/question_image.png'
import mansetting from '../assets/mansitting.png'
import support from '../assets/support.png'
import winner from '../assets/winner.png'

import '../styles/aboutcodeme.css'

function Aboutcodemecards() {
    return (
        <div>
             <div className="cardmaincontainer flex flex-wrap align-middle mx-32 my-32 justify-evenly"> 
                
                <div className="card1container ">
                   
                   <div className="card1"> 
                    
                            <div className="front">
                                    <img src={qperson} alt="person with questionmark"/>
                            </div>
                   
                            <div className="back">
                                    <img src={support} alt="support" className="support"/>
                                    <p>We have a dedicated support team to answer your questions. 
                                    Everyone needs help while learning and we are trying to give you the best learning experience!</p>
                            </div>
                    
                    </div>
                </div>
                <div className="card2container ">
                   
                   <div className="card2"> 
                    
                            <div className="front">
                                    <img src={mansetting} alt="person with questionmark"/>
                            </div>
                   
                            <div className="back">
                                    <img src={winner} alt="backimg" className="winner"/>
                                    <h1>Get Certified</h1>
                                    <p>With all paid courses, earn a verifiable certificate to showcase your skills!</p>
                            </div>
                    
                    </div>
                </div>
                
                
                
                
                
                
               

            </div> 
        </div>
    )
}

export default Aboutcodemecards

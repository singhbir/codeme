import React from 'react'
import '../styles/mycss.css'
import Typical from 'react-typical'
import circle1 from '../assets/circle1.png'

function Homecontent() {
    const txt1 = "<CODE"
    const txt2 = "ME/>"
    return (
        <div className="deskview">
            <div className="flex">
                <h1 className="txt  text-white my-10 md:text-lg">{txt1}</h1><img src={circle1} className="circle mx-20 z-0 mx-auto h-64" alt="circle"/>
            </div>
            <Typical className="typ  text-5xl text-white lg:z-10"
            steps={['AN E-LEARNING PLATFORM', 1000, 'CODE WITH FUN ', 1000]}
            loop={Infinity}
            wrapper="p"
            />
            <h1 className="txt2 text-white py-3 ">{txt2}</h1>
        </div>
    )
}

export default Homecontent

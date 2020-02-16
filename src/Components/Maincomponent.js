import React from 'react'
import Navbar from './Navbar'
import '../App.css'
import Homecontent from './Homecontent'

function Maincomponent() {
    return (
        <div className="mainclass overflow-hidden">
            <Navbar/>
            <Homecontent/>
        </div>
    )
}

export default Maincomponent

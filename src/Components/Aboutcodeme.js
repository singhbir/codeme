import React from 'react'
import '../styles/aboutcodeme.css'
import Aboutcodetext from './Aboutcodetext'
import Aboutcodemecards from './Aboutcodemecards'
import Aboutcodecountup from './Aboutcodecountup'

function Aboutcodeme() {
    return (
        <div className="aboutcodeme">
            <Aboutcodetext/>
            <Aboutcodemecards/>
            <Aboutcodecountup/>
        </div>
    )
}

export default Aboutcodeme

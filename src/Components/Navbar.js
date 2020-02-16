import React from 'react'
import '../styles/app.css'
import logo from '../assets/logo3.png'
import '../styles/mycss.css'

function Navbar() {
    return (
        <div className=" bg-transparent p-8 md:p-8 sm:p-10 flex justify-center">
            <div className="lg:h-12 md:h-10 sm:h-8">
                <img src={logo} alt="logo" height="100px" width="100px" className="logoimg"></img>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Navbar

import React from 'react'
import '../styles/courses.css'
function Coursetext() {
    var first = "<"
    var mid = "C"
    var last = "OURSES/>"
    return (
        <div className="cmaintext">
            <h1 className="maintext px-20 mx-20 text-6xl text-center"><span>{first}</span><span className="text-red-600">{mid}</span><span>{last}</span></h1>
        </div>
    )
}

export default Coursetext

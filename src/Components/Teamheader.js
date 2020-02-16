import React from 'react'

function Teamheader() {
    var first = "<"
    var mid = "T"
    var last = "EAMS/>"
    return (
        <div>
            <div className="teamstext">
    <h1>{first}<span>{mid}</span>{last}</h1>
            </div>
        </div>
    )
}

export default Teamheader

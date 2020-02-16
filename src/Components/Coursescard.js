import React from 'react'
import '../styles/courses.css'

function Coursescard(props) {
    return (
            <div className="card border-8 border-gray-900 h-48 w-48 m-2">
                <div className="imgBox">
                        <img src ={props.image} alt="python" className=""></img>
                </div>
                <div className="content bg-black opacity-75">
                        <div className="cname text-white text-3xl">
                            <h1>{props.name}</h1>
                        </div>
                        <div className="cbutton">
                                <button className="">{props.price}</button>
                        </div>
                </div>  

            </div>
    )
}

export default Coursescard

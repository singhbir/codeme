import React from 'react'
import '../styles/courses.css'
import Coursetext from './Coursetext'
import Coursecard from './Coursescard'
import data from '../data.json'

function Courses() {

    
    return (
        <div className="coursemain min-h-full ">
            <Coursetext/>
            <div className="container flex  box-border  mx-16 my-10 ">  
            {data.map((d)=>{return(
             <Coursecard name={d.name} image={d.image} price={d.Price}/>
            )}
            )}
            </div>
        </div>
    )
}

export default Courses

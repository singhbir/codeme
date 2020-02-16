import React from 'react'
import avatar from '../assets/avatar.PNG'

function Teamcard() {
    return (
        <div className="maincardclass flex flex-wrap justify-evenly">
            <div className="teamcard1">
                <div className="teamimg1">
                    <img src={avatar} alt="avatar"/>
                </div>
                <div>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                </div>
            </div>
            <div className="teamcard1">
                <div className="teamimg1">
                <img src={avatar} alt="avatar"/>
                </div>
                <div>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                </div>
            </div>
            <div className="teamcard1">
                <div className="teamimg1">
                <img src={avatar} alt="avatar"/>
                </div>
                <div>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                </div>
            </div>
            <div className="teamcard1">
                <div className="teamimg1">
                <img src={avatar} alt="avatar"/>
                </div>
                <div>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Teamcard

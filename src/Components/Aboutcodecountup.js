import React from 'react'
import CountUp from 'react-countup';
function Aboutcodecountup() {
    return (
        <div>
            <div className="undernav mx-32 h-16 mt-32 flex flex-wrap justify-center align-middle">
                    <div>
                        <h1 className="pr-8">
                                Total students
                        </h1>
                    </div>
                    <div>
                        <CountUp start={0} end={100} duration={10} className="counter1" delay={7}/>
                    </div>
                    <div>
                        <h1 className="pl-12 pr-4">
                                Courses
                        </h1>
                    </div>
                    <div>
                        <CountUp start={0} end={8} duration={10} className="counter1" delay={7}/>
                    </div>
            </div>

        </div>
    )
}

export default Aboutcodecountup

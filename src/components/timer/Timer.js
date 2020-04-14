import React, { useState, useEffect } from 'react';

import './styles.css'

const Timer = ({ time, auto, step, onTimeEnd, onTick, onTimePause }) => {
    const initialTime = time;
    const [ count, setCount ] = useState(time)
    const [ isActive, setIsActive ] = useState(auto);

    const changeActiveness = () => setIsActive(!isActive) 

    useEffect(() => {
        if(isActive || auto){
            if(count<0){
                onTimeEnd()
                setCount(initialTime)
            }
            const myInterval = setInterval(() => {
                setCount(count - 1)
                onTick(count)
                
            }, step * 1000)
            return () => {
                clearInterval(myInterval)
            }
        }
        onTimePause()
    }, [isActive, count, auto])
    
    return(
        <div className='box'>
            <h2>{count}</h2>
            <p style={{width: `${count * 10}px`}} className='line'></p> {/*<---for homework purpose only*/}
            {auto || <button onClick={changeActiveness}>{!isActive ? 'start' : 'pause'}</button> }
        </div>
    )
}
export default Timer;
import React, { useState, useEffect } from 'react'

export default function Effect({ time, auto, step }){
    const initial = time;
    const [ count, setCount ] = useState(time)
    const [ isActive, setIsActive] = useState(auto);

    function changeActivness(){
        setIsActive(!isActive)
    }
    useEffect(() => {
        if(isActive || auto){
            if(count<0){
                setCount(initial)
            }
            const myInterval = setInterval(() => {
                setCount(count - 1)
            }, step)
            return () => {
                clearInterval(myInterval)
            }
        }
    }, [isActive, count, auto])
    
    return(
        <div>
            <h3>Using useEffect</h3>
            {count}
            {auto || <button onClick={changeActivness}>{!isActive ? 'start' : 'pause'}</button> }
        </div>
    )
}
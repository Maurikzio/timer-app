import React, { useState, useEffect } from 'react';

function ComponentWithUseEffect(){
    const [count, setCount] = useState(0);
    const [isStarted, setIsStarted] = useState(true);

    function toggle(){
        setIsStarted(isStarted ? false : true);
        console.log(isStarted);
    }

    useEffect(() => {
        const interval = setTimeout(() => {
            setCount(count + 1);
        }, 2000);
        return () => {
            clearInterval(interval);
        }
    }, [isStarted]);


    return (
        <div>
            <h4>Fn Component with useEffect</h4>
            <p>Count incremented {count} times</p>
            <button onClick={toggle}>toggle</button>
        </div>
    )
}

export default ComponentWithUseEffect;


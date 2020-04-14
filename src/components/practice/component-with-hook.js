import React,  { useState } from 'react';

function CounterHooked() {

    const [count, setCount] = useState(0);

    function handleButtonClick(){
        setCount(count + 1);
    }

    return (
        <div>
            <p>Count incremented {count} times</p>
            <button onClick={handleButtonClick}>Click me</button>
        </div>
    )
}

export default CounterHooked;
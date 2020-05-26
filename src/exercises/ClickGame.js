import React, { useState, useEffect, useRef } from "react";
/*
  Instructions:
    You're building an app to see how many times you can click
    a button in 10 seconds. 

    The UI has three parts, a button, a timer counting down from 10,
    and a count of how many times you've clicked the button.

    Once the timer reaches 0, remove the button from the UI.
*/

export default function CounterGame() {
    const [count, setCount] = useState(0);
    const [timeLeft, setTimeLeft] = useState(10);
    const id = useRef(null);


    function clear() {
        window.clearInterval(id.current);
    }

    useEffect(() => {
        if (timeLeft <= 0)
            clear();
    }, [timeLeft]);

    useEffect(() => {
        id.current = setInterval(() => {
            setTimeLeft((t) => t - 1);
        }, 1000);

        return () => clear();
    }, []);


    return (
        <div className="App" style={{ textAlign: 'center' }}>
            <h1>{count}</h1>
            <h3>Time left: {timeLeft} seconds</h3>
            {timeLeft > 0 && <button onClick={() => setCount(c => c + 1)}>+</button>}
        </div>
    );
}

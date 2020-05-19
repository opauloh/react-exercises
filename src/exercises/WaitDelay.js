import React, { useState, useEffect } from "react";

/*
  Instructions:
    You'll notice below that we have a Wait component.
    The purpose of Wait is to render the `ui` prop after
    `delay` seconds. Before `delay` seconds, it should
    render `placeholder`.
*/

function Wait({ delay = 1000, placeholder, ui }) {

    const [update, setUpdate] = useState(false);

    useEffect(() => {
        const id = setTimeout(() => {
            setUpdate(true);
        }, delay);

        return () => window.clearTimeout(id);
    }, [delay]);


    return update ? ui : placeholder;
}

export default function WaitDelay() {
    return (
        <div className="App">
            <Wait
                delay={3000}
                placeholder={<p>Waiting...</p>}
                ui={<p>This text should appear after 3 seconds.</p>}
            />
        </div>
    );
}
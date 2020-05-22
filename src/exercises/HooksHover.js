import React, { useState } from "react";


function Hover({ children }) {
    const [hovering, setHovering] = useState(false);

    return (
        <span
            onMouseOver={() => setHovering(true)}
            onMouseOut={() => setHovering(false)}
        >
            {children(hovering)}
        </span>
    )
}

export default function HooksHover() {

    return (
        <>
            <Hover>
                {(hovering) => <div style={{ height: 100, background: 'cyan' }}>
                    Is Hovering? {hovering ? "yes" : "no"}
                </div>}
            </Hover>
            <hr />
            <HoverProps render={(hovering) => (
                <div style={{ height: 100, background: 'cyan' }}>
                    Is Hovering? {hovering ? "yes" : "no"}
                </div>
            )}
            />
        </>
    );
}



function HoverProps({ render }) {
    const [hovering, setHovering] = useState(false);

    return (
        <span
            onMouseOver={() => setHovering(true)}
            onMouseOut={() => setHovering(false)}
        >
            {render(hovering)}
        </span>
    )
}

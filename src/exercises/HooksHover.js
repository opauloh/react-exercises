import React, { useState } from "react";


function useHover() {
    const [hovering, setHovering] = useState(false);
    const mouseOver = () => setHovering(true);
    const mouseOut = () => setHovering(false);

    const attrs = {
        onMouseOver: mouseOver,
        onMouseOut: mouseOut
    }

    return [hovering, attrs];
}

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
    const [hovering, attrs] = useHover();

    return (
        <>
            Render Props (Children)
            <Hover>
                {(hovering) => <div style={{ height: 100, background: 'cyan' }}>
                    Is Hovering? {hovering ? "yes" : "no"}
                </div>}
            </Hover>
            <hr />
            Render Props
            <HoverProps render={(hovering) => (
                <div style={{ height: 100, background: 'cyan' }}>
                    Is Hovering? {hovering ? "yes" : "no"}
                </div>
            )}
            />
            <hr />
            Custom Hooks (useHover)
            <div style={{ height: 100, background: 'cyan' }} {...attrs} >
                Is Hovering? {hovering ? "yes" : "no"}
            </div>
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

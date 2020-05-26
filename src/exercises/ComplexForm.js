import React, { useRef } from "react";

/*
  Instructions:
    You're given the UI for a basic form. Your task is to 
    hook it all up using refs. 

    The `Focus X Input` buttons should focus that specific input
    field.

    The `Submit` button should log `name`, `email`, and `password`
    to the console.

    The `Reset` button should result all of the input fields to 
    empty strings.
*/

export default function ComplexForm() {

    const name = useRef();
    const email = useRef();
    const password = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name.current.value);
        console.log(email.current.value);
        console.log(password.current.value);
    }

    const handleReset = () => {
        name.current.value = '';
        email.current.value = '';
        password.current.value = '';
    }

    return (
        <React.Fragment>
            <label>
                Name:
        <input
                    placeholder="name"
                    ref={name}
                    type="text"
                />
            </label>
            <label>
                Email:
        <input
                    placeholder="email"
                    ref={email}
                    type="text"
                />
            </label>
            <label>
                Password:
        <input
                    placeholder="password"
                    ref={password}
                    type="text"
                />
            </label>

            <hr />

            <button onClick={() => name.current.focus()}>
                Focus Name Input
            </button>
            <button onClick={() => email.current.focus()}>
                Focus Email Input
            </button>
            <button onClick={() => password.current.focus()}>
                Focus Password Input
            </button>

            <hr />

            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleReset}>Reset</button>
        </React.Fragment>
    )
}


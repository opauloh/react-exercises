import React from "react";

/*
  Instructions:
    Assume you're creating an app that allows the user to 
    post status updates (ala Twitter). Your UI should have a
    textarea and a button. The button should be disabled if the
    length of the textarea is 0 or greater than 240 characters.
    The document's title should inform the user on how many
    characters they have left to type before they hit the 240
    character limit - "115 characters left."
*/

export default function CharacterLimit() {
    const maximum = 240;
    const [input, setInput] = React.useState("");

    React.useEffect(() => {
        document.title = `${maximum - input.length} characters left`;
    }, [input]);

    return (
        <div className="App">
            <textarea onChange={(e) => setInput(e.target.value)} value={input} />
            <button disabled={input.length > maximum || input === ""}>Post</button>
        </div>
    );
}


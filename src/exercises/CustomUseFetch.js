import React, { useState, useEffect } from "react";

/*
  Instructions:
    Implement the `useFetch` function. 
*/

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => {
                console.warn(err.message);
                return setError('Error handling request');
            })
            .finally(response => setLoading(false));
    }, [url]);

    return { loading, data, error }
}

const postIds = [1, 2, 3, 4, 5, 6, 7, 8]

export default function CustomUseFetch() {
    const [index, setIndex] = React.useState(0)

    const { loading, data: post, error } = useFetch(
        `https://jsonplaceholder.typicode.com/posts/${postIds[index]}`
    )

    const incrementIndex = () => {
        setIndex((i) =>
            i === postIds.length - 1
                ? i
                : i + 1
        )
    }

    if (loading === true) {
        return <p>Loading</p>
    }

    if (error) {
        return (
            <React.Fragment>
                <p>{error}</p>
                <button onClick={incrementIndex}>Next Post</button>
            </React.Fragment>
        )
    }

    return (
        <div className="App">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            {index === postIds.length - 1
                ? <p>No more posts</p>
                : <button onClick={incrementIndex}>
                    Next Post
          </button>}
        </div>
    );
}

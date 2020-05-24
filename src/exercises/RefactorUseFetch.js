import React from "react";

/*
  Instructions:
    Refactor `useFetch` to use `useReducer` instead of
    `useState`.
*/

function fetchReducer(state, action) {
    if (action.type === 'loading') {
        return { ...state, loading: true }
    } else if (action.type === 'loaded') {
        return { ...state, loading: false, error: null, data: action.data }
    }


    throw Error("action not implemented!");
}

function useFetch(url) {
    const [{ loading, data, error }, dispatch] = React.useReducer(fetchReducer, {
        loading: true,
        data: null,
        error: null
    });

    React.useEffect(() => {
        dispatch({ type: 'loading' });
        fetch(url)
            .then((res) => res.json())
            .then((data) => dispatch({ type: 'loaded', data }))
            .catch((e) => {
                dispatch({ type: 'error', error: 'Error fetching data. Try again.' })
                console.warn(e.message)
            })
    }, [url])

    return { loading, data, error }
}

const postIds = [1, 2, 3, 4, 5, 6, 7, 8]

export default function RefactorUseFetch() {
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
            {error && <p>{error}</p>}
            {index === postIds.length - 1
                ? <p>No more posts</p>
                : <button onClick={incrementIndex}>
                    Next Post
          </button>}
        </div>
    );
}


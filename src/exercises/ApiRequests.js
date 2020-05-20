import React, { useEffect, useState } from "react";

/*
  Instructions:
    You're given an array of `postIds` and a `fetchPost` function.
    When you invoke `fetchPost`, you'll need to pass it an `id` from
    the `postIds` array. `fetchPost` returns a promise that will resolve
    with a post shaped like this

    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }

    The UI should show `Loading` if the request is still being made,
    an error message if there was an error, or the post title, body,
    and a button to fetch the next post on a successful request.
*/

const postIds = [1, 2, 3, 4, 5, 6, 7, 8]

function fetchPost(id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
}

export default function ApiRequests() {

    const [postIndex, setPostIndex] = useState(0);
    const [post, setPost] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {

        setLoading(true);

        fetchPost(postIds[postIndex])
            .then(data => {
                setError(null)
                setPost(data)
            }).catch(e => {
                console.warn(e.message)
                setError('Error fetching data')
            }).finally(setLoading(false))

    }, [postIndex]);


    if (loading)
        return <p>loading...</p>

    if (error)
        return <p>{error}</p>

    return (
        <div className="App">
            <h5>{post.title}</h5>
            <p>{post.body}</p>
            {postIndex < (postIds.length - 1) && <button onClick={() => setPostIndex((postIndex + 1))}>Next</button>}
        </div>
    );
}


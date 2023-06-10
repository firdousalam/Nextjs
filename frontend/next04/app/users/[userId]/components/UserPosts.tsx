type Props = {
    promise : Promise<Post[]>
}
import React from 'react'

export default async function UserPosts({promise} : Props) {
    const userPost = await promise;
 //   console.log("post Data",userPost)
    const content = userPost.map((post)=>{
        return <>
            <article key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <br />
            </article>
        </>
    })
    return content
}

import React from 'react'

export default async function getUserPost(userId:string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userid=${userId}`)// jsonplaceholder.typicode.com
    if(!res.ok) throw new Error("Error In Fetching User");
    return res.json();
}

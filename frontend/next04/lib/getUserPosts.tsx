import React from 'react'

export default async function getUserPost(userId:string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userid=${userId}`,{
        'next' : {revalidate : 60}
    })// we can add
    // {'cache':'force-cache'} to cache and 'no-store' to not cache by default it is force-cache 
    if(!res.ok) throw new Error("Error In Fetching User");
    return res.json();
}

import React from 'react'

export default async function getUser(userId:string) {
   // console.log(userId);
   
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)// jsonplaceholder.typicode.com
    if(!res.ok) return undefined
    return res.json();
}

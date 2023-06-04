import React from 'react'

export default async function getUser(userId:string) {
   // console.log(userId);
   
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)// jsonplaceholder.typicode.com
    if(!res.ok) throw new Error("Error In Fetching User");
    return res.json();
}

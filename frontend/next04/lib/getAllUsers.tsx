import React from 'react'

export default async function getAllUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")// jsonplaceholder.typicode.com
    if(!res.ok) throw new Error("Error In Fetching Users");
    return res.json();
}

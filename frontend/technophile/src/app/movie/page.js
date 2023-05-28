// this think you need to add
"use client"
import Link from 'next/link'
import React, { Component } from 'react'
const Movie = async ()=> {
  console.log(process.env.URL);
  await new Promise(resolve => setTimeout(resolve, 2000));


  const url = process.env.URL;

  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': process.env.KEY,
          'X-RapidAPI-Host': process.env.HOST
      }
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  console.log(main_data)
    return (
      <>
        <h1>Welcome to Movie Page</h1>
        <Link href="/movie/id">Click Here</Link>
      </>
    )
  }

export default Movie
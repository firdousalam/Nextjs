// this think you need to add
"use client"
import React, { Component } from 'react'
import MovieCard from '../Components/MovieCard';
import styles from "@/app/style/common.module.css";

async function getData() {
  const res = await fetch('http://localhost:5000/users/getUser');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}
const Movie =async ()=> {
  const main_data = await getData();

  
/*
let main_data = [{
  id : 1,
  "title" : "this is my title 1"
},
{
  id : 2,
  "title" : "this is my title 1"
},
{
  id : 3,
  "title" : "this is my title 1"
},
{
  "id" : 4,
  "title" : "this is my title 1"
},
{
  id : 5,
  "title" : "this is my title 1"
}]
*/
    return (
      <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
            <h1>Series & Movie</h1>
            
             {
              main_data.map((currData)=>{
                console.log(currData);
               // return <MovieCard key={currData.id} data={...currData}></MovieCard>
              })
            }
          </div>
        </section>
      </>
    )
  }

export default Movie
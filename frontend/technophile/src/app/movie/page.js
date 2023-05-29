// this think you need to add
"use client"
import React, { Component } from 'react'
import MovieCard from '../Components/MovieCard';
import styles from "@/app/style/common.module.css"
const Movie = async ()=> {
/*  
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

  let main_data =[];
  if(typeof  data.titles !='undefined'){
    main_data = data.titles;
  }
*/
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
    return (
      <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
            <h1>Series & Movie</h1>
            
             {
              main_data.map((currData)=>{
               // console.log(currData);
                return <MovieCard key={currData.id} data={...currData}></MovieCard>
              })
            }
          </div>
        </section>
      </>
    )
  }

export default Movie
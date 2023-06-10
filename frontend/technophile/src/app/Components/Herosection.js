"use client"
import React, { Component } from 'react'
import heroStyle from "@/app/style/herosection.module.css"
import commonStyle from "@/app/style/common.module.css"
import Link from 'next/link'
import Image from 'next/image'
const heroSection = ({title,image})=> {

    return (
      <>
        <main className={heroStyle.main_section}>
            <div className={commonStyle.container}>
                <div className={commonStyle.grid_two_section}>
                    <div className={heroStyle.hero_content}>
                        <h1>{title}</h1>
                        <p>This is my paragraph to see all data<br />
                        Here we can see movie list</p>
                        <button>
                            <Link href="/movie">
                                Explore Movie
                            </Link>
                        </button>
                    </div>
                    <div className={heroStyle.hero_image}>
                        <Image src={image}
                        alt="Vercel Logo"
                        
                        width={350}
                        height={460}
                        priority>

                        </Image>
                    </div>

                </div>

            </div>

        </main>
      </>
    )
  }

export default heroSection

"use client"// this think you need to add
import Link from 'next/link'
import styles from "../style/navbar.module.css"
import Nav from "./Nav"
import React, { Component } from 'react'
import Image from 'next/image'

export class Header extends Component {
  
  render() {
   
    return (
    <>
      <header className={styles.main_header}>
        <div className={styles.navabar_brand}>
           
            <Link href="/">
            <Image
              src="/main.jpeg"
              alt="Vercel Logo"
              className="imgRound"
              width={150}
              height={100}
              priority
            />

                
            </Link>

        </div>
      <Nav/>
      </header>
      </>
     
    )
  }
}

export default Header

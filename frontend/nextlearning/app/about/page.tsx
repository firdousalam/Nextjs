import React from 'react'
import styles from '@/app/page.module.css'
import Link from 'next/link'

export default function About() {
 //   throw new Error('try again');
  return (
    <main className={styles.main}>
        <h1>
            
        About Us Page
        </h1>
        <Link href="/">Home</Link>
    </main>
  )
}

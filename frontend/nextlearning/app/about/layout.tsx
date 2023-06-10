import React from 'react'
import Styles from "./styles.module.css"
export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <>
        <nav>My about layout</nav>
        <main className={Styles.main}>
           {children}
        </main>
    </>
  )
}

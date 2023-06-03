import React from 'react'

export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <>
        <nav>My about layout</nav>
        <main>
           {children}
        </main>
    </>
  )
}
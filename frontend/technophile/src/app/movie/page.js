"use client"// this think you need to add
import Link from 'next/link'
import React, { Component } from 'react'

export class page extends Component {
  render() {
    return (
      <>
        <h1>Welcome to Movie Page</h1>
        <Link href="/movie/id">Click Here</Link>
      </>
    )
  }
}

export default page
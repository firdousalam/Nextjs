"use client"// this think you need to add
import React, { Component } from 'react'
import Herosection from "@/app//Components/Herosection"
export class page extends Component {
  render() {
    return (
      <>
        <Herosection title={"About Us"} image={"/vercel.svg"}/>
      </>
    )
  }
}

export default page

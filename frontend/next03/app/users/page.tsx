import React from 'react'
import {Metadata} from "next"
import Link from "next/link"
import styles from '@/app/page.module.css'
import getAllUsers from '@/lib/getAllUsers'
export const metadata:Metadata = {
    title: 'User Page',
    description: 'Users Page and fetch data',
  }
  
export default async function Users() {
    const userData : Promise<User[]> = getAllUsers();
    const users = await userData;
   // console.log("hello user");
    const content = (
        <section>
            <h2>
            <Link href="/">Back to Home</Link>
            </h2>
            < br/>
            {
                users.map((user)=>{
                    return (<>
                          
                        <p key={user.id}>
                           
                                <Link href={`/users/${user.id}`}>{user.name}  <br /></Link>
                           <br />

                        </p>
                    </>
                    )
                })
            }
        </section>
    )
  return content;
}

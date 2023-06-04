import getUser from "@/lib/getUser"
import getUserPost from "@/lib/getUserPosts"
import UserPosts from "./components/UserPosts"
import Link from "next/link"
import {Suspense} from 'react'
import { Metadata } from "next"
type Params = {
    params : {
        userId : string
    }
}

export async function generateMetaData({params : {userId}}:Params):Promise<Metadata>
{
    const userData : Promise<User> = getUser(userId);  
    const user:User = await userData;
    return {
        title : user.name,
        description : user.website
    } 
}
export default async function UserDetails({params : {userId}}:Params) {
    const userData : Promise<User> = getUser(userId);
    const userPost : Promise<Post[]> = getUserPost(userId);
   // const [user,post] = await Promise.all([userData,userPost]);
   const user:User = await userData;
  return (
    <>
        <h2>
            <Link href="/users">Back to Users</Link>
        </h2>
        <h2>{user.name}</h2>
        <br />
        <p>
            {user.email} - {user.website}<br />
            <Suspense fallback={<h2>Loading ........</h2>}>
                {/* @ts-expect-error Server Component*/}
                <UserPosts promise={userPost} />
            </Suspense>
        </p>
    </>
  )
}

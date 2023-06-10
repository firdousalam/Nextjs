import getUser from "@/lib/getUser"
import getUserPost from "@/lib/getUserPosts"
import UserPosts from "./components/UserPosts"
import Link from "next/link"
import {Suspense} from 'react'
import { Metadata } from "next"
import getAllUsers from "@/lib/getAllUsers"
import {notFound} from "next/navigation"
type Params = {
    params : {
        userId : string
    }
}

export async function generateMetaData({params : {userId}}:Params):Promise<Metadata>
{
    const userData : Promise<User> = getUser(userId);  
    const user:User = await userData;
    if(!user.name){
        return {
            "title" : "Not Found User"
        }
    }
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
   if(!user ) return notFound();
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
export async function generateStaticParams(){
    const userData : Promise<User[]> = getAllUsers();
    const users = await userData;
    return users.map((data)=>({
         userId : data.id.toString()
    }))
}

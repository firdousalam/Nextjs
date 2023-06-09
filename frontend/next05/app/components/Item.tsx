import Link from 'next/link'
import React from 'react'

type Props = {
    result : Result
}

export default function Item({result}: Props) {
  return (
    <div className='flex flex-col justify-center'>
        <h2>
            <Link href={`https://en.wikipedia.org/?curid=${result.pageid}`} target='_blank'
            className='text-xl font-bold underline'>
                {result.title}
            </Link>
        </h2>
        <p>
            {result.extract}
        </p>
   
    </div>
  )
}
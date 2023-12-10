import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

function GitHub() {

    const data = useLoaderData()

    // const [data,setData] = useState([])

    // useEffect(() =>  {
    //     fetch('https://api.github.com/users/Hanish069')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // },[data])

    return (
        <div className='relative flex items-top justify-center items-center p-4 rounded-lg text-center m-4 bg-slate-500 text-black text-3xl'>
            <h1>GitHub Followers: {data.followers}</h1><br/>
            <img src={data.avatar_url} alt="Git pic" width= {300} />
        </div>
    )
}

export default GitHub

export const githubAccInfo = async () => {
    const response = await fetch('https://api.github.com/users/Hanish069')
    return response.json()
}

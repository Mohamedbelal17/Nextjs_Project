"use client"
import { useState } from "react"

export default function Counter({user}) {
    const [count , setCount] = useState(0)
    return  (<>
    <p>there are {user.length} users</p>
        <button onClick={()=>setCount(count+1)}>{count}</button>
        </>)
    
}
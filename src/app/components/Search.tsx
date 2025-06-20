'use client'
import { useState } from "react"
export default function Search(){
    const [searchN,setSeatchN] = useState("")


    return(
        <div>
               <input type="text" placeholder="search" value={searchN} onChange={(e)=>setSeatchN(e.target.value)} />
            
        </div>
    )
}
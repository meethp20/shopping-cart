'use client'
import { products } from "../data/products"
import { useState } from "react"
import { item } from "../types/type"
import ItemCard from "./Card"
export default function Search(){
    const [searchN,setSeatchN] = useState("")
    const [searchList,setSearchList] = useState<item[]>([])

  function handleSubmit(){
    const List:item[] = products.filter((product:item)=> {
               product.name.toLowerCase().includes(searchN.toLowerCase());
    } )
    setSearchList(List);
  }

    return(
        <div>
            <form onSubmit={handleSubmit} >
               <input type="text" placeholder="search" value={searchN} onChange={(e)=>setSeatchN(e.target.value)} />
               <button type="submit"> Search</button>
               </form>
            <div>
                {searchList && (
                    searchList.map((value,index)=>{
                        return(
                            <div key={index}>
                              <ItemCard itemData={value}/>
                            </div>
                        )
                    })
                    
                )}
            </div>
        </div>
    )
}
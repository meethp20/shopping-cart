'use client'
import { products } from "../data/products"
import { useState } from "react"
import { item } from "../types/type"
import ItemCard from "./Card"

export default function Search(){
    const [searchN, setSearchN] = useState("")
    const [searchList, setSearchList] = useState<item[]>([])

  function handleSubmit(e:React.FormEvent){
    e.preventDefault();
    const List:item[] = products.filter((product:item)=> 
          product.name.toLowerCase().includes(searchN.toLowerCase())
    );
    setSearchList(List);
  }

    return(
        <div className="flex items-center justify-center">
            <form onSubmit={handleSubmit} >
               <input 
                   type="text" 
                   placeholder="search" 
                   value={searchN} 
                   onChange={(e) => setSearchN(e.target.value)} 
               />
               <button type="submit">Search</button>
            </form>
            <div>
                {searchList && (
                    searchList.map((value, index) => (
                        <div key={index}>
                            <ItemCard itemData={value}/>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}
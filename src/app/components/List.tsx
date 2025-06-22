'use client'
import { products } from "../data/products"
import ItemCard from "./Card"

export default function List(){
    return(
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4"> 
               {
                products.map((value,index)=>
                    (
                        <div className="grid grid-cols-3" key={index}>
                            <ItemCard itemData={value}/>
                        </div>
                    )
                )
               }
        </div>
    )
}

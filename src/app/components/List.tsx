'use client'
import { products } from "../data/products"
import itemCard from "./Card"
export default function List(){
    return(
        <div>
               {
                products.map((value,index)=>{
                    return(
                        <div>
                            {itemCard(value)}
                        </div>
                    )
                })
               }
        </div>
    )
}

'use client'
import { products } from "../data/products"
import ItemCard from "./Card"
export default function List(){
    return(
        <div>
               {
                products.map((value,index)=>{
                    return(
                        <div className="grid grid-cols-3" key={index}>
                            <ItemCard itemData={value}/>
                        </div>
                    )
                })
               }
        </div>
    )
}

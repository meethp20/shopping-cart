'use client'
import { item } from "../types/type";

export default function itemCard({itemData}:{itemData:item}){
    return(
        <div>
            <div>
                <img src={itemData.imageUrl} alt="" />
            </div>
        <div>
            {itemData.name}
            {itemData.price}
        </div>
        <div>
            {itemData.description}
        </div>
        </div>
    )
}
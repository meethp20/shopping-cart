'use client'
import { item } from "../types/type";
import { useCartStore } from "../store/cartStore";
export default function ItemCard({itemData}:{itemData:item}){
const addToCart = useCartStore((state)=>state.addToCart)


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
        <div>
            <button onClick={()=>addToCart(itemData)}>
               Add
            </button>

        </div>
        </div>
    )
}
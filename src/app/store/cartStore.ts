import { create } from "zustand";
import { item } from "../types/type";

type cartState = {
    cart : item[]
    addToCart : (product:item) => void
    removeFromCart : (id:string) => void 
    cleanCart:()=>void
}

export const useCartStore  = create< cartState>((set)=>({
        cart:[],
        addToCart:(product)=>
            set((state)=>({
                cart:[...state.cart,product],
            })),
      removeFromCart:(id)=>
        set((state)=>({
            cart:state.cart.filter((p)=>p.name!==id),
        })),
        cleanCart: ()=>set({cart: []});
    }
)
)
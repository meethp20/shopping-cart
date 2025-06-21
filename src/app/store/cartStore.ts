import { create } from "zustand";
import { item } from "../types/type";

type cartState = {
    cart : item[]
    addToCart : (product:item) => void
    removeFromCart : (id:string) => void 
    increaseQuantity:(id:string)=>void
    decreaseQuantity:(id:string)=>void
    total:(productArr:item[])=>void 
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
        increaseQuantity:(id)=>
            set((state)=>({
                cart:state.cart.map((p)=>
                p.name===id?{...p,quantity:p.quantity+1}:p),
            })),
        decreaseQuantity:(id)=>
            set((state)=>({
                cart:state.cart.map((p)=>
                    p.name===id?{...p,quantity:p.quantity-1}:p
                ),
            })),
            total:(productArr)=>
                set((state))=>({
                    cart:state.cart.map((p))=>
                        
                })
        cleanCart: ()=>set({cart: []}),
    }
)
)
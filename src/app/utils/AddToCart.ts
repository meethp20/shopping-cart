import { item } from "../types/type";

export function AddToCart(){
    // how do i write this function where this Adds the current product to the itemCart ?  value or product to be pushed into itemCart
    // how do i maintain global states for stuff? how does the button know that there are already things in the card and how would the cart know that i 
    
}

export function calTotal(cart:item[]){
    return cart.reduce((sum,item)=>sum+item.price*item.quantity,0)
}
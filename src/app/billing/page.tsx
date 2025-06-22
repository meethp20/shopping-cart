'use client'

import { useCartStore } from "../store/cartStore"

export default function BillingPage(){
    const cart = useCartStore((s)=>s.cart)
    return(
        <div>
          <h1>Your order summary</h1>
          {cart.map((item,index)=>(
            <div 
            className="border p-4 rounded shadow flex justify-between items-center"
            key={index}>
               <div>
                 <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">₹{item.price} × {item.quantity}</p>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />

               </div>
            </div>
          ))}
        
        </div>
    )
}
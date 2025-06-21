import { useCartStore } from "../store/cartStore";
import { item } from "../types/type";
import { calTotal } from "../utils/AddToCart";

export default function BottomBar({itemArr}:{itemArr:item[]}){
const cart = useCartStore((s)=>s.cart)
    const Total = calTotal(itemArr)
    return(
        <div className="w-full h-[100px] border shadow-2xl bg-gray-200 rounded-t-2xl bottom-0 flex items-center px-6 fixed z-50 justify-center">
            <div >
            <h1>Total: {Total}</h1>
            <p className="">Check Cart</p>
            </div>
            <button className="border bg-green-400 text-gray-200 ">Checkout</button>
        </div>
    )
}
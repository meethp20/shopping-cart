import { item } from "../types/type";
import BottomBar from "./BillingBar";

export default function BillingComponent({itemArr}:{itemArr:item[]}){
    return (
        <div>
            <BottomBar itemArr={itemArr}/>
        </div>
    )
}
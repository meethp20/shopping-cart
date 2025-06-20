'use client'

import List from "../components/List"
import Search from "../components/Search"
export default function LandingPage(){
    return(
         <div>
           <div>
                <div>
                    <h1>Market<span className="text-Red">Place</span></h1>
                    <button >Sign In</button>
                </div>
                <Search / > 
                <div>
                   <List /> 
                </div>
            </div> 
             

    )
}

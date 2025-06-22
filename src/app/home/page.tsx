'use client'

import List from "../components/List"
import Navbar from "../components/Navbar"
import Search from "../components/Search"
export default function LandingPage(){
    return(
         <div>
            <Navbar/>
               <div>
                    <h1></h1>
                    <button >Sign In</button>
                </div>
                <Search / > 
             <div>
                   <List /> 
                </div>
               
            </div> 
             

    )
}

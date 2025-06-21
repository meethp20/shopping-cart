import { supabase } from "../lib/supabaseClient";
export default function signInButton(){
    const handleLogin= async()=>{
        const {error} = await supabase.auth.signInWithOAuth({
            provider:"google",
        })
        if(error) console.log("Error loggin in ", error.message)
    }
return <button onClick={handleLogin} className="g-blue-500 text-white p-2 rounded">Sign In</button>
}
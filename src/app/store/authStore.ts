import { User } from "@supabase/supabase-js"
import { create } from 'zustand'

type AuthState={
 user:User|null
 isLoggedIn:boolean
 setUser:(user:User|null)=>void
}

export const useAuthStore= create<AuthState>((set)=>({
    user:null,
    isLoggedIn:false,
    setUser:(user)=>set({user,isLoggedIn:!!user}),
}))

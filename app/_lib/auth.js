import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

const authConfig={
    providers:[Google(
       { clientId: process.env.AUTH_GOOGLE_ID,
        clientSecret:process.env.AUTH_GOOGLE_SECRET
       } 
    ),
    
],
callbacks:{
    //her to check if he is sigin or not
    authorized({auth , request}) {
        return !!auth?.user
    },
    //her to connect the user account to the supabase if he has account in out database or not
    async signIn({user , profile , account}){
        try{
            const existingGuest = await getGuest(user.email)
            if(!existingGuest){
                await createGuest({email:user.email , fullName:user.name})
            }
            return true
        }catch{
            return false
        }
    } ,
    //her to get the data of the user to we can use it in out application
    async session({session , user}){
        const guest = await getGuest(session.user.email)
        session.user.guestId = guest.id
        return session
    }
},
//pages is to redirect the sigin in page to our custime page 
pages:{
    signIn: "/login" ,
}
,
}

export const {auth ,signIn,signOut, handlers:{
    GET , POST
},} = NextAuth(authConfig)

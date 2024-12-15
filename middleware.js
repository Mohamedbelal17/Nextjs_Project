// import { NextResponse } from "next/server";

import { auth } from "./app/_lib/auth"

// export default function middleware(req) {
//   console.log("middleware", req);

//   return NextResponse.redirect(new URL("/about" , req.url))
// }
//my first try==>
// export default async function middleware(req) {
//   const session = await auth()
//   if(!session){
//     return NextResponse.redirect(new URL("/about" , req.url))
//   }
//   return 
// }

//the video ==> we will make callbake is the auth.js file

export const middleware = auth;
export const config= {
  matcher:["/account"]
}
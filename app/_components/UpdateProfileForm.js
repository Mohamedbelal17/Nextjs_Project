"use client"
// import { useState } from "react";
import { UpdateProfil } from "@/app/_lib/actions";
import Submitbutton from "./Submitbutton";

export default function UpdateProfileForm({children , guest}){
    // const [Count , setCount] = useState()
    const { fullName , email , countryFlag  ,nationalID } = guest

    

    return(
        <form action={UpdateProfil} className="bg-primary-900 p-8 flex flex-col gap-6">
        <div className="space-y-2">
          <label>Full name</label>
          <input disabled name="fullName" defaultValue={fullName} className="w-full py-3 capitalize px-5 rounded-sm bg-primary-200 text-primary-800 disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400" />
        </div>
  
          <div className="space-y-2">
            <label>Email address</label>
            <input
              disabled defaultValue={email} name="email"
              className="px-5 py-3 bg-primary-200 text-primary-800  w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
            />
          </div>
  
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="nationality">Where are you from?</label>
              <img
                src={countryFlag}
                alt="Country flag"
                className="h-5 rounded-sm"
              />
            </div>
  
          
            {children}
          </div>
  
          <div className="space-y-2">
            <label htmlFor="nationalID">National ID number</label>
            <input
            defaultValue={nationalID}
              name="nationalID"
              className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            />
          </div>
  
          <div className="flex justify-end items-center gap-6">
           <Submitbutton pendingText={"updating..."}>
          Update
           </Submitbutton>
          </div>
        </form>
    )
}

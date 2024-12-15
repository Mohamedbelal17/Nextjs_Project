"use client"
import { createContext, useContext, useState } from "react"

const intialState = {
    from: undefined , to: undefined
}
const ReservationContext = createContext()

function ReservationProvider({children}){
    const [range , setRange] = useState(intialState)
    const resetRange = ()=>setRange(intialState)

    return (
        <ReservationContext.Provider value={{range , setRange , resetRange}}>
            {children}
        </ReservationContext.Provider>
    )
}

function useReservation()
{
    const context = useContext(ReservationContext)
    if(context === undefined) throw new Error("Context was used outside the provider")
    
    return context
}

export {
    ReservationProvider , useReservation
}
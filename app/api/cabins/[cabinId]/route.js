import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service"

export async function GET(request , {params}) {
    const {cabinId}=params

    try{
        const [cabin , bookingDate] = await Promise.all([getCabin(cabinId) , getBookedDatesByCabinId(cabinId)])
        return Response.json({cabin , bookingDate})

    }catch{
        return Response.json({message: "cabin is not found"})
    }
}
import { auth } from "@/app/_lib/auth";
import { getBookings } from "@/app/_lib/data-service";
import Link from "next/link";
import ReservationList from "@/app/_components/ReservationList";
export const metadata = {
  title: "Reservations",
}

export default async function Page() {
    const session = await auth()
    const bookings = await getBookings(session?.user.guestId);
    console.log(bookings)
    return <div>
            <h2 className="font-semibold text-2xl text-accent-400 mb-7">Your reservations</h2>

      {bookings.length === 0 ? (
        <p className="text-lg"> You have no reservations yet. Check out our{` `}
          <Link href={'/cabins'} className="underline text-accent-500">luxury cabins &rarr;</Link>
        </p>
      ) : (
        <ReservationList bookings={bookings} />
      )}
    </div>
}
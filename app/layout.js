import "@/app/_styles/globals.css" 
import {Josefin_Sans} from "next/font/google"
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

const josefin = Josefin_Sans({
  subsets:["latin"],
  display:"swap",
})
export const metadata = {
  title: {
    default: "Welcome to The Wild Oasis",
template:"%s | The Wild Oasis",
  },
  description: "welcome to the wild oasis website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.className} relative bg-primary-950 antialiased text-primary-50 min-h-screen flex flex-col`}>
       
       <Header />
       <div className="flex-1 py-12 px-8 grid">
        <main className="max-w-7xl mx-auto w-full">
          <ReservationProvider>{children}</ReservationProvider>

        </main>
        </div>
      
      </body>
    </html>
  )
}
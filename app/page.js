import Link from "next/link";
import hero from "@/public/bg.png"
import Image from "next/image";
export default function Home() {
  return (
   <main className="mt-24">
    <Image src={hero} fill className="object-cover object-top" placeholder="blur" alt="hero image" />
    <div className="text-center relative z-10">
      <h1 className="text-8xl tracking-tighter font-normal mb-10">Welcome to paradise.</h1>
      <Link href="/cabins" className="bg-accent-500  hover:bg-accent-600 transition-colors duration-300  text-primary-800 px-8 py-6 text-lg  font-semibold">Explore luxury cabins</Link>
    </div>
   </main>
  );
}

import Link from "next/link";

export default function NotFound(){
    return <main className="flex flex-col gap-5 justify-center items-center mt-8">
        <h1 className="text-accent-100 text-4xl ">The cabin could not be found :(</h1>
        <Link href="/cabins" className="bg-accent-500 text-primary-800 px-4 py-2 ">Back to all cabins</Link>
    </main>
}
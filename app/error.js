'use client'
export default function Error({reset , error}) {
    return <main className="flex flex-col gap-5 justify-center items-center ">
        <h1 className="text-accent-100 text-4xl font-bold">Something went wrong</h1>
        <p className="text-primary-200 text-lg">{error.message}</p>
        <button onClick={reset} className="bg-accent-500 text-primary-800 text-lg px-4 py-2 ">Try again</button>
    </main>
}
import SignInButton from "@/app/_components/SignInButton";

export const metadata = {
    title:"Login",
}

export default function page(){
    return(
        <div className="flex flex-col items-center gap-10 mt-10">
          <h2 className="text-2xl font-semibold">sign in for access your gust area</h2>  
            <SignInButton />
        </div>
    )
}
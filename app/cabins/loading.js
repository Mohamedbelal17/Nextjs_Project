import Spinner from "../_components/Spinner";

export default function Loading(){
    return (  <div className="gap-4 grid justify-center items-center">
        <Spinner />
        <h1 className="text-xl text-primary-200 font-bold">Loading cabins data...</h1>
        </div>)
      
}
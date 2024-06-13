import { petApiData } from "../hooks/petApiData";
import { IPets } from "../models/IPets";
import { AnimalCard } from "./AnimalCard";




export const AnimalApp=()=>{
const[loading, data]= petApiData<IPets[]>("https://animals.azurewebsites.net/api/animals");
console.log(data);


    return(
    <>
    {loading && <h1>Loading...</h1>}
    <AnimalCard data ={data}/>
    </>
    )
}

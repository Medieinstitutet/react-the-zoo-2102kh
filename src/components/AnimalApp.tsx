import { petApiData } from "../hooks/petApiData";
import { IPets } from "../models/IPets";
import { AnimalPresentation } from "./AnimalPresentation";




export const AnimalApp=()=>{
const[loading, data]= petApiData<IPets[]>("https://animals.azurewebsites.net/api/animals");
console.log(data);


    return(
    <>
    {loading && <h1>Loading...</h1>}
    {!loading && data?(
     <AnimalPresentation data ={data}/>
    ):(!loading && <h1>No data available</h1>)}
    </>
    )
}

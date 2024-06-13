import { petApiData } from "../hooks/petApiData";
import { IPets } from "../models/IPets";




export const AnimalApp=()=>{
const[loading, data]= petApiData<IPets[]>("https://animals.azurewebsites.net/api/animals");
console.log(data);


    return(
    <>
    {loading && <h1>Loading...</h1>}
    <div>
        <ul>
            {data && data.map((pet)=>(
  <li key={pet.id}>
    <h2>{pet.name}</h2>
    <p><strong>Year of Birth:</strong>{pet.yearOfBirth}</p>
    <img src={pet.imageUrl}  alt={pet.name} className="pet-image"/>
    <p>{pet.shortDescription}</p>
    <p>{pet.longDescription}</p>
    <h3>{pet.lastFed}</h3>


  </li>
            )


            )}
         
        </ul>
    </div>


    </>
    )
}

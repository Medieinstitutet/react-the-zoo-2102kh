
import { useState } from "react";
import { IPets } from "../models/IPets"

interface  IPetDataProps{
    data:IPets[]   
}
export const AnimalPresentation=({data}:IPetDataProps)=>{
const [animals, setAnimals]= useState<IPets[]>(data);



const onClickPet=(id:number)=>{
setAnimals((obj)=>
obj.map((pet)=>pet.id === id? {...pet, isFed : !pet.isFed }:pet))
}

  return<>
    <div className="pet-card">
    <ul>
    {animals.map((pet)=>( 
    <li className="card" key={pet.id}>
    <h2>{pet.name}</h2>
   
    <img src={pet.imageUrl}
         alt={pet.name}
         className="pet-image" />
        <p><strong>Year of Birth: </strong>{pet.yearOfBirth}</p>
    <p>{pet.shortDescription}</p>
    {/* <p>{pet.longDescription}</p> */}
    <h3>{pet.lastFed}</h3>
    <button onClick ={()=> onClickPet(pet.id)} 
    style={{backgroundColor: pet.isFed?'green ':'red',color:'white'}}>
     {pet.isFed ?'Matad':'Mata Djuren'}</button>
    </li>
)
)}

     </ul>
    </div>
    </>
}
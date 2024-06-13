import { IPets } from "../models/IPets"

interface  IPetDataProps{
    data:IPets[]
}
export const AnimalCard=({data}:IPetDataProps)=>{

    return<>
    <div className="pet-card">
    <ul>
    {data && data.map((pet)=>(
    <li key={pet.id}>
    <h2>{pet.name}</h2>
    <p><strong>Year of Birth:</strong>{pet.yearOfBirth}</p>
    <img src={pet.imageUrl}  alt={pet.name} className="pet-image"/>
    <p>{pet.shortDescription}</p>
    {/* <p>{pet.longDescription}</p> */}
    <h3>{pet.lastFed}</h3>
    <button>Mata</button>
    </li>
)
)}

     </ul>
    </div>
    </>
}
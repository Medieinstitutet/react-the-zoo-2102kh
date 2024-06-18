
import { useEffect, useState } from "react";
import { IPets } from "../models/IPets";
import { useNavigate } from "react-router-dom";

interface IPetDataProps {
  data: IPets[];
}

export const AnimalPresentation = ({ data }: IPetDataProps) => {
  const [animals, setAnimals] = useState<IPets[]>(data);
  const navigate = useNavigate();
  const [timeSinceFed,setTimeSinceFed]= useState<{[key:number]:number}>({})//varje nyckeln presenterar att djurs id och värdet antalet av millisekunder
  
  useEffect(()=>{
  const storedanimals = localStorage.getItem("animals");
  if(storedanimals){
     const savedAnimals =JSON.parse(storedanimals) as IPets[];
     setAnimals(savedAnimals);
  }else{
     setAnimals(data);
  }
  },[data]);

  useEffect(()=>{
    const interval= setInterval(()=>{
      const now = Date.now();
      const updatedTimeSinceFed: { [key: number]: number } = {};

    animals.map((animal) => {
      updatedTimeSinceFed[animal.id] = now - animal.lastFed;
    });

    setTimeSinceFed(updatedTimeSinceFed);
    //console.log('updating time since:' ,updatedTimeSinceFed);
    
  }, 1000);

  return () => clearInterval(interval);
}, [animals]);
   
  
  const onClickPet = (id: number) => {
    const now=Date.now()
    const updatedAnimals=animals.map((pet) =>
        pet.id === id ? { ...pet, isFed:true , lastFed:now } : pet
      )
      setAnimals(updatedAnimals);
      localStorage.setItem("animals",JSON.stringify(updatedAnimals));
  };

  const onClickCard = (id: number) => {
    navigate(`/djur/djurcard/${id}`, { state: { data } });
  };

  return (
    <div className="pet-card">
      <ul>
        {animals.map((pet) => (
          <li className="card" key={pet.id}>
            <div onClick={() => onClickCard(pet.id)}>
              <h2>{pet.name}</h2>
              <img
                src={pet.imageUrl}
                alt={pet.name}
                className="pet-image"
              />
              <p>
                <strong>Year of Birth: </strong>
                {pet.yearOfBirth}
              </p>
              <p>{pet.shortDescription}</p>        
               <h3>{pet.lastFed}</h3>
            </div>
            <button
              onClick={() => onClickPet(pet.id)}
              style={{
                backgroundColor: pet.isFed ? "green" : "red",
                color: "white",
              }}
              
            >
              {pet.isFed ? "Matad" : "Mata Djuren"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

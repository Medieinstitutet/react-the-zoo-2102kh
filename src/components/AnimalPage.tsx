
import { useEffect, useState } from "react";
import { IPets } from "../models/IPets";

interface IAnimalPageProps {
  animal: IPets;
}

export const AnimalPage = ({ animal }: IAnimalPageProps) => {

  const[isFed, setIsFed] = useState(false);
  const [lastFed,setLastFed] = useState(animal.lastFed);
  
  useEffect(()=>{
    const interval= setInterval(()=>{
      const currentTime=Date.now();
      const timeDiff = currentTime-lastFed;
      //console.log(timeDiff)
      setLastFed(timeDiff);
      const hoursSinceFed =timeDiff /(1000*60*60);
      if(hoursSinceFed >3){
        setIsFed(false);
      }
    },1000)
    return ()=> clearInterval(interval)
  },[lastFed]);

  const handleFeed=()=>{
    const now= Date.now();
    setLastFed(now);
    setIsFed(true);
  }
 
 
  
  return (
    <div>
      <h1>{animal.name}</h1>
      <img src={animal.imageUrl} alt={animal.name} width={700} height={650} />
      <p>{animal.longDescription}</p>
      <p><strong>Year of Birth:</strong> {animal.yearOfBirth}</p>
      <h3>Last Fed: {animal.lastFed}</h3>
      {!isFed && <h2>{animal.name} behöver matas</h2>}
      <button 
      onClick={handleFeed}
      disabled={animal.isFed}
      style={{backgroundColor: isFed? 'green':'red' }}>
      {isFed? 'Matad': 'Mata Djuret'}
      </button>
    </div>
  );
};

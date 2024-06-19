import { useEffect, useState } from "react";
import { IPets } from "../models/IPets";
import { useNavigate } from "react-router-dom";

interface IPetDataProps {
  data: IPets[];
}

export const AnimalPresentation = ({ data }: IPetDataProps) => {
  const [animals, setAnimals] = useState<IPets[]>(data);
  const navigate = useNavigate();
  const [timeSinceFed, setTimeSinceFed] = useState<{ [key: number]: number }>(
    {}
  ); //varje nyckeln presenterar att djurs id och värdet antalet av millisekunder

  useEffect(() => {
    const storedanimals = localStorage.getItem("animals");
    if (storedanimals) {
      const savedAnimals = JSON.parse(storedanimals) as IPets[];
      setAnimals(savedAnimals);
    } else {
      setAnimals(data);
    }
  }, [data]);


  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
  
    
      const updatedTimeSinceFed: { [key: number]: number } = {};
  
      const updatedAnimals = animals.map(animal => {
        const timeDiff = now - animal.lastFed;
        updatedTimeSinceFed[animal.id] = timeDiff;
  
        if (timeDiff / (1000 * 60 * 60) > 3) {
          return { ...animal, isFed: false };
        }
        return animal;
      });
  
      setTimeSinceFed(updatedTimeSinceFed);
      setAnimals(updatedAnimals);
    }, 1000);
  
    return () => clearInterval(interval);
  }, [animals]);
  

  const onClickPet = (id: number) => {
    const now = Date.now();
    const updatedAnimals = animals.map((pet) =>
      pet.id === id ? { ...pet, isFed: true, lastFed: now } : pet
    );
    setAnimals(updatedAnimals);
    localStorage.setItem("animals", JSON.stringify(updatedAnimals));
  };

  const needToFeed = (lastFed: number) => {
    const mlsecInHour = 1000 * 60 * 60;
    const hoursSinceFeed = (Date.now() - new Date(lastFed).getTime())  / mlsecInHour;
    //console.log("Hours since last fed:", hoursSinceFeed); 
    return hoursSinceFeed ;
  };

  const formatTime = (time: number) => {
    const hours = Math.floor(time / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  const onClickCard = (id: number) => {
    navigate(`/djur/djurcard/${id}`, { state: { data } });
  };

  return (
    <div className="pet-card">
      <ul>
        {animals.map((pet) => (
          <li className="card" key={pet.id}>
            {needToFeed(pet.lastFed) > 1 && !pet.isFed && (
              <div className="mata"><h3>{pet.name} behöver matas!</h3></div>
            )}

            <div onClick={() => onClickCard(pet.id)}>
              <h2>{pet.name}</h2>
              <img src={pet.imageUrl} alt={pet.name} className="pet-image" />
              <p>
                <strong>Year of Birth: </strong>
                {pet.yearOfBirth}
              </p>
              <p>{pet.shortDescription}</p>
              <h3>{new Date(pet.lastFed).toLocaleString()}</h3>
              <p>
                Tid sedan senaste matning:{formatTime(timeSinceFed[pet.id])}
              </p>
            </div>
            <button
              onClick={() => onClickPet(pet.id)}
              disabled={pet.isFed}
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

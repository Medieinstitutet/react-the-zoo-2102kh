import { useEffect, useState } from "react";
import { IPets } from "../models/IPets";

interface IAnimalPageProps {
  animal: IPets;
}

export const AnimalPage = ({ animal }: IAnimalPageProps) => {
  const [isFed, setIsFed] = useState(animal.isFed);
  const [lastFed, setLastFed] = useState(animal.lastFed);
  const [timeSinceFed, setTimeSinceFed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = Date.now();
      const timeDiff = currentTime - lastFed;
      //console.log(timeDiff)
      setTimeSinceFed(timeDiff);
      const hoursSinceFed = timeDiff / (1000 * 60 * 60);
      if (hoursSinceFed > 1) {
        setIsFed(false);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [lastFed]);

  

  const handleFeed = () => {
    const now = Date.now();
    setLastFed(now);
    setIsFed(true);
    const storedAnimals = JSON.parse(localStorage.getItem("animals") || "[]");
    const updatedAnimals = storedAnimals.map((storedAnimal: IPets) =>
      storedAnimal.id === animal.id
        ? { ...storedAnimal, isFed: true, lastFed: now }
        : storedAnimal
        
    );
    console.log(isFed)
    localStorage.setItem("animals", JSON.stringify(updatedAnimals));

  };
  const formatTime = (time: number) => {
    const hours = Math.floor(time / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="pet-page">
      <div className="image-page">
        <img src={animal.imageUrl} alt={animal.name} width={700} height={650} />
      </div>
      <div className="petCard-info">
        <h1>{animal.name}</h1>
        <p>{animal.longDescription}</p>
        <p>
          <strong>Year of Birth:</strong> {animal.yearOfBirth}
        </p>
        <h3>Last Fed: {new Date(lastFed).toLocaleString()}</h3>
        <p>Tid sedan senaste matning: {formatTime(timeSinceFed)}</p>
        {!isFed && <h2 className="mata">{animal.name} behöver matas</h2>}
        <button
          onClick={handleFeed}
          disabled={animal.isFed}
          style={{ backgroundColor: isFed ? "green" : "red", color: "white" }}
        >
          {isFed ? "Matad" : "Mata Djuret"}
        </button>
      </div>
    </div>
  );
};

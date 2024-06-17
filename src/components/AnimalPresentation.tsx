
import { useState } from "react";
import { IPets } from "../models/IPets";
import { useNavigate } from "react-router-dom";

interface IPetDataProps {
  data: IPets[];
}

export const AnimalPresentation = ({ data }: IPetDataProps) => {
  const [animals, setAnimals] = useState<IPets[]>(data);
  const navigate = useNavigate();

  const onClickPet = (id: number) => {
    setAnimals((obj) =>
      obj.map((pet) =>
        pet.id === id ? { ...pet, isFed: !pet.isFed } : pet
      )
    );
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

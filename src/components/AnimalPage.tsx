
import { IPets } from "../models/IPets";

interface IAnimalPageProps {
  animal: IPets;
}

export const AnimalPage = ({ animal }: IAnimalPageProps) => {
  return (
    <div>
      <h1>{animal.name}</h1>
      <img src={animal.imageUrl} alt={animal.name} width={700} height={650} />
      <p>{animal.longDescription}</p>
      <p><strong>Year of Birth:</strong> {animal.yearOfBirth}</p>
      <h3>Last Fed: {animal.lastFed}</h3>
      <button>
        Mata Djuret
      </button>
    </div>
  );
};

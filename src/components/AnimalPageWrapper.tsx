
import { useParams } from "react-router";
import { IPets } from "../models/IPets";
import { AnimalPage } from "./AnimalPage";
import { petApiData } from "../hooks/petApiData";
import { useEffect, useState } from "react";

export const AnimalPageWrapper = () => {
  const { id } = useParams<{ id: string}>();
  const [loading, data] = petApiData<IPets[]>("https://animals.azurewebsites.net/api/animals");
  const [animal, setAnimal] = useState<IPets | null>(null);
  const animalId = parseInt(id!, 10);

   useEffect(() => {
    const storedAnimals = localStorage.getItem("animals");
    if (storedAnimals) {
    const animals = JSON.parse(storedAnimals) as IPets[];
    const foundAnimal = animals.find((animal) => animal.id === animalId);//hittar djuret baserat på id
    setAnimal(foundAnimal || null);
    }
  }, [animalId]); 

  if (loading) {
    return <div>Loading...</div>;
  }
  if(!data){
    return <h1>No data avalable!</h1>
  }

  if(!animal){
    return <div>Animal not found</div>
 }
  return <AnimalPage animal={animal} />;
};

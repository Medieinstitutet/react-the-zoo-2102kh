
import { useParams } from "react-router";
import { IPets } from "../models/IPets";
import { AnimalPage } from "./AnimalPage";
import { petApiData } from "../hooks/petApiData";

export const AnimalPageWrapper = () => {
  const { id } = useParams<{ id: string}>();
  const [loading, data] = petApiData<IPets[]>("https://animals.azurewebsites.net/api/animals");
 
  if (loading) {
    return <div>Loading...</div>;
  }
  if(!data){
    return <h1>No data avalable!</h1>
  }
  const animalId = parseInt(id!, 10);
  const animal =data.find((animal)=> animal.id === animalId);
  if(!animal){
    return <div>Animal not found</div>
 }
  return <AnimalPage animal={animal} />;
};

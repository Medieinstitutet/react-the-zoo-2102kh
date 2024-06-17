
import { petApiData } from "../hooks/petApiData";
import { IPets } from "../models/IPets";
import { AnimalPresentation } from "./AnimalPresentation";

export const AnimalApp = () => {
  const [loading, data] = petApiData<IPets[]>("https://animals.azurewebsites.net/api/animals");

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return <h1>No data available</h1>;
  }

  return <AnimalPresentation data={data} />;
};



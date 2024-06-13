/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios"
import { useEffect, useState } from "react";

export const petApiData=<T>(url: string):[boolean,T|undefined]=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData]= useState<T>();
    const[loading, setLoading] =useState(false);
    
    useEffect(()=>{
        const getData= async()=>{
            try{
                const response=  await axios.get(url);
                setData(response.data)
            }catch(error){
                console.log(error)
            }finally{
                setLoading(false)
            }     
        }
        if(!data)getData();
        
    }
)
return[loading,data]
}

    


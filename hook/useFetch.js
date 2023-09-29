import { useState, useEffect}  from "react";
import axios from "axios";

const useFetch = (endpoint,query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [ error, seterror] = useState(null);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': '9778402d92msh79c92225b7a1137p15a28ajsn713ac5a8b9eb',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: {
      ...query
    },
    
  };

  const fetchData = async() => {
    setIsLoading(true);

    try{
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    }catch(error){
      seterror(true);
      alert("There is an error");
    }finally{
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  },[]);

  const refetch = () =>{
    setIsLoading(true);
    fetchData();
  }
  return { data, isLoading, error, refetch}
}

export default useFetch;
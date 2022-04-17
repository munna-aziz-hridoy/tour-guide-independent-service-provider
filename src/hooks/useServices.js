import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://raw.githubusercontent.com/munna-aziz-hridoy/practice-data/main/services.json"
      );
      const data = await res.json();
      setServices(data);
    };
    fetchData();
  }, []);

  return [services, setServices];
};

export default useServices;

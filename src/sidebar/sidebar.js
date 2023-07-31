import React, { useEffect, useState } from "react";
import './sidebar.css';
import ApiItem from "../apiItem/apiItem";


function Sidebar({apiDetailFunc}) {

  const [providers, setProviders] = useState();

  const getApiData = async () => {
    const response = await fetch(
      "https://api.apis.guru/v2/providers.json"
    ).then((response) => response.json());

    setProviders(response.data);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="sidebar">
      {providers &&
        providers.map((provider) => (
          <ApiItem providerName={provider} apiDetailFunc={apiDetailFunc}></ApiItem>
        ))}
    </div>
  );
}

export default Sidebar;

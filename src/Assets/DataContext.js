import React, { createContext, useState } from "react";
export const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  React.useEffect(() => {
    const fun = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setResponse(json);
    };
    fun();
  }, []);
  return response;
};

export const DataContext = createContext();
export const DataProvider = (props) => {
  const [Players, setPlayers] = useState([]);
  const [SelectedPlayers, setSelectedPlayers] = useState([]);
  const [SearchPlayers , setSearchPlayers] =useState([])
  return (
    <DataContext.Provider
      value={{  SelectedPlayers, setSelectedPlayers,Players, setPlayers,SearchPlayers,setSearchPlayers }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

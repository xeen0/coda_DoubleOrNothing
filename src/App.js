import { Redirect, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import "./App.css";
import PageOne from "./Pages/PageOne";
import PageTwo from "./Pages/PageTwo";
import { DataContext, useFetch } from "./Assets/DataContext";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { setPlayers, setSearchPlayers } = useContext(DataContext);
  const D = useFetch(
    "https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json"
  );
  useEffect(() => {
    const fun = () => {
      if (D) {
        const d = D.map((d) => ({
          ...d,
          Price:Number(d.Price),
          Level: 0,
          Wins: 0,
          Loss: 0,
        }));
        setPlayers(d);
        setSearchPlayers(d);
      }
    };
    fun();
  }, [D]);
  return (
    <div className="App">
      <Redirect to={{ pathname: "/Page1", state: { from: "/" } }} />
      <Route exact path="/Page1" component={PageOne} />
      <Route exact path="/Page2" component={PageTwo} />
    </div>
  );
}

export default App;

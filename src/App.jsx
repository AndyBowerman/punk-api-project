import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import BeerInfo from "./Pages/BeerInfo/BeerInfo";

const App = () => {
  

  return (
    <Router>
        <Routes>
          <Route
            path="/beers/:beerId"
            element={
              <BeerInfo />
            }
          ></Route>
          <Route
            path="/"
            element={
              <Home />
            }
          ></Route>
        </Routes>
    </Router>
  );
};

export default App;
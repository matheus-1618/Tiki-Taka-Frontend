import "./App.css";
import axios from "axios";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/TikiTaka";
import Ballondor from "./components/TikiTaka/ballondor/ballondor";
import GoldenBoot from "./components/TikiTaka/golden_boot/golden_boot";
import Competitions from "./components/TikiTaka/competitions/competitions";
import Premier from "./components/TikiTaka/tables/premier";
import Bundes from "./components/TikiTaka/tables/bundes";
import Laliga from "./components/TikiTaka/tables/laliga";
import Ligue1 from "./components/TikiTaka/tables/ligue1";
import SerieA from "./components/TikiTaka/tables/seriea";
import Liganos from "./components/TikiTaka/tables/liganos";
import Brasileirao from "./components/TikiTaka/tables/brasileirao";
import Eredvise from "./components/TikiTaka/tables/eredvise";
import Clubs from "./components/TikiTaka/clubs/clubs";
import Club from "./components/TikiTaka/clubs/club";
import Players from "./components/TikiTaka/players/players";
import Player from "./components/TikiTaka/players/player";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ballondor" element={<Ballondor/>}/>
        <Route path="/golden" element={<GoldenBoot/>}/>
        <Route path="/competitions" element={<Competitions/>}/>
        <Route path="/GB1" element={<Premier/>}/>
        <Route path="/L1" element={<Bundes/>}/>
        <Route path="/ES1" element={<Laliga/>}/>
        <Route path="/FR1" element={<Ligue1/>}/>
        <Route path="/IT1" element={<SerieA/>}/>
        <Route path="/PO1" element={<Liganos/>}/>
        <Route path="/BRA1" element={<Brasileirao/>}/>
        <Route path="/NL1" element={<Eredvise/>}/>
        <Route path="/clubs" element={<Clubs/>}/>
        <Route path="/clubs/:id" element={<Club/>}/>
        <Route path="/players" element={<Players/>}/>
        <Route path="/players/:id" element={<Player/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
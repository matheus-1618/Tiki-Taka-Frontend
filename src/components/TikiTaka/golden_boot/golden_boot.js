import React from "react";
import "./golden_boot.css";
import { useState,useEffect } from "react";
import { GiSoccerField,GiSoccerBall } from "react-icons/gi";
import axios from "axios";
import Appbar from "../appbar/appbar";
import Bottom from "../bottombar/bottombar";
import LoadingSpinner from "../loading/loading";

export default function GoldenBoot(props) {
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const golden = (<>
  <br></br>
  <br></br>
  <h1 className="letra">CHUTEIRA DE OURO</h1>
  <h2 className="descricao">Jogadores com mais gols, em pontuação adotada pela UEFA na temporada de 2021</h2>
  <div className="card-container">
    {players.map((player) => (
      <div className="card">
        <div className="soccerIcons">
          <h1>{player.id}°</h1>
          <img className="club" src={player.club}/>
        </div>
        <img className="imageplayer" src={player.image}/>
        <h3 className="card-title">{player.first_name} {player.surname.split(' ').slice(0,1).join(" ")}</h3>
        <div className="soccerIcons">
          <h2><GiSoccerField/> {player.matches}</h2>
          <h2><GiSoccerBall/> {player.goals}</h2>
        </div>
        
        <div className="card-content"></div>
        <div className="details">
        </div>
      </div>
      ))}
    </div></>)

  useEffect(() => {
    axios
      .get("https://sleepy-wave-09569.herokuapp.com/golden")
      .then((res) => {setPlayers(res.data);setIsLoading(false)});
  }, []);

  return (
    <main className="App">
      <Appbar/>
      {isLoading ? <LoadingSpinner/>: golden}
      
      <Bottom/>
    </main>
  );
}
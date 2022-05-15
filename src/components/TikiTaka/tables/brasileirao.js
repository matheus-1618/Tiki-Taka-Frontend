import React from "react";
import "./tables.css";
import { useState,useEffect } from "react";
import { GiSoccerField,GiSoccerBall,GiPlainArrow,GiSoccerKick,GiPodiumWinner,GiShakingHands } from "react-icons/gi";
import axios from "axios";
import Appbar from "../appbar/appbar";
import Bottom from "../bottombar/bottombar";
import LoadingSpinner from "../loading/loading";

export default function Brasileirao(props) {
  const [teams, setTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const brasileirao = (<>
     <br></br>
      <br></br>
      <h1 className="letra">BRASILEIRÃO 2022</h1>
      <br></br>
      <div className="table-container">
        <div className="brasileirao">
          <h1>Posição</h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h2><GiSoccerKick/> Pontos</h2>
          <h2><GiSoccerField/> Partidas</h2>
          <h2><GiPodiumWinner/> Vitórias</h2>
          <h2><GiShakingHands/> Empates</h2>
          <h2><GiPlainArrow/> Derrotas</h2>
          <h2><GiSoccerBall/> Saldo</h2>
        </div>
      {teams.map((team) => (
        <div className="brasileirao">
          <h1>{team.posicao}°</h1>
          <img className="club-table" src={team.foto}/>
          <h1>{team.nome}</h1>
          <h1></h1>
          <h1></h1>
          <div className="statics">
            <h2 className="stats">{team.pontos}</h2>
            <h2 className="stats">{team.jogos}</h2>
            <h2 className="stats">{team.vitorias}</h2>
            <h2 className="stats">{team.empates}</h2>
            <h2 className="stats">{team.derrotas}</h2>
            <h2 className="stats">{team.saldo}</h2>
          </div>
        </div>
        ))}
        </div>
        <br></br>
      <br></br>
  </>)

  useEffect(() => {
    axios
      .get("https://sleepy-wave-09569.herokuapp.com/brasileirao")
      .then((res) => {setTeams(res.data);setIsLoading(false)});
  }, []);

  return (
    <main className="App">
      <Appbar/>
      {isLoading ? <LoadingSpinner/> : brasileirao}
      <Bottom/>
    </main>
  );
}
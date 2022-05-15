import React from "react";
import "./players.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Appbar from "../appbar/appbar";
import Bottom from "../bottombar/bottombar";
import LoadingSpinner from "../loading/loading";

export default function Players(props) {
 const [players, setPlayers] = useState([]);
 const [isLoading, setIsLoading] = useState(true); 
 const players_template = (<>
 <br></br>
 <br></br>
 <h1 className="letra">JOGADORES</h1>
 <h2 className="descricao">Jogadores relevantes pesquisados na comunidade Tiki-Taka</h2>
 <div className="cardplayers-container">
 {players.map((player) => (
     <Link to={`/players/${player.id}`} className='link-players'>
     <div className="card-players">
       <h1 className="players-title">{player.nome.split(' ').slice(0,2).join(" ")}</h1>
       <br></br>
       <img className="playersimage" src={player.image}/>
       <div className="icons">
           <img  className="clubplayerimage" src={player.clube}/>
       </div>
     </div>
     </Link>
     ))}
 </div></>)
  useEffect(() => {
    axios
      .get("https://sleepy-wave-09569.herokuapp.com/players")
      .then((res) =>{ setPlayers(res.data);setIsLoading(false)});
  }, []);
  return (
    <main className="App">
      <Appbar/>
      {isLoading ? <LoadingSpinner/> : players_template}
      <Bottom/>
    </main>
  );
}
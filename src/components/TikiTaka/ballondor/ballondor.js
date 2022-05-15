import React from "react";
import "./ballondor.css";
import { useState,useEffect } from "react";
import axios from "axios";
import Appbar from "../appbar/appbar";
import Bottom from "../bottombar/bottombar";
import LoadingSpinner from "../loading/loading";


export default function Ballondor(props) {
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const Ballondor = (<><h1 className="letra">FIFA BALLON D'OR</h1>
                      <h2 className="descricao">Melhores jogadores do mundo nos últimos 30 anos</h2>
                      <div className="card-container">
                      {players.map((player) => (
                        <a className="card">
                          <h1>{player.year}</h1>
                          <div className="details">
                            {player.value.length ?
                            (<img className="club" src={player.value}/>)
                            :(<img className="club" src="https://tmssl.akamaized.net/images/wappen/medium/131.png?lm=1406739548"/>)
                            }
                              <img className="country" src={player.country}/>
                          </div>
                          <img className="imageplayer" src={player.image}/>
                          <br></br>
                          <h3 className="card-title">{player.first_name} {player.surname.split(' ').slice(0,2).join(" ")}</h3>
                          <div className="card-content"></div>
                        </a>
                        ))}
                        </div></>);

  useEffect(() => {
    axios
      .get("https://sleepy-wave-09569.herokuapp.com/best")
      .then((res) => {setPlayers(res.data); setIsLoading(false)});
  }, []);
  return (
    <main className="App">
      <Appbar/>
      <br></br>
      <br></br>
      {isLoading?<LoadingSpinner/> : Ballondor}
      <Bottom/>
    </main>
  );
}
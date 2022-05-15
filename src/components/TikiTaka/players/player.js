import React from "react";
import "./players.css";
import axios from "axios";
import { useParams  } from "react-router-dom";
import { useState,useEffect } from "react";
import Appbar from "../appbar/appbar";
import Bottom from "../bottombar/bottombar";
import { GiTShirt,GiPerson,GiBottomRight3DArrow,GiSoccerBall,GiSoccerField,GiBookCover,GiGrowth,GiBodyHeight,GiMoneyStack } from "react-icons/gi";
import LoadingSpinner from "../loading/loading";

export default function Player(props) {
 const [ player,setPlayer] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 let { id } = useParams(); 


 useEffect(() => {
    setIsLoading(true);
    const get_player = async () =>
    {let response  = await  axios
    .get(`https://sleepy-wave-09569.herokuapp.com/players/${id}`)
    .then((res) => {setPlayer(res.data); setIsLoading(false)});}
    get_player().catch(console.error);
     }, []);

     
 const club_template = (
    <>
    <div className="cabecalho">
        <img className="image-players" src={player.image}/>
        <h1 className="letra-clube">{player.nome}</h1>
        <img className="image-players" src={player.clube}/>
        <img className="country-players" src={player.pais}/>
    </div>
    <br></br>
    <div className="dados-players">
    <h1 className="letra-player">Estatisticas 2021</h1>
    <div className="player-stats">
        <h2 className="detalhes-clubes"><GiSoccerField/> Jogos: {player.jogos}</h2>
        <h2 className="detalhes-clubes"><GiSoccerBall/> Gols: {player.gols}</h2>
        <h2 className="detalhes-clubes"><GiBottomRight3DArrow/> Assistências: {player.assistencia}</h2>
    </div>
    <h1 className="letra-player">Informações</h1>
    <h2 className="detalhes-clubes"><GiPerson/> Nome: {player.nome}</h2>
    <h2 className="detalhes-clubes"><GiBookCover/> Data de nascimento: {player.data}</h2>
    <h2 className="detalhes-clubes"><GiGrowth/> Idade: {player.idade}</h2>
    <h2 className="detalhes-clubes"><GiBodyHeight/> Altura: {player.altura}m</h2>
    <h2 className="detalhes-clubes"><GiTShirt/>Número: {player.numerodacamisa}</h2>
    <h2 className="detalhes-clubes"><GiMoneyStack/> Valor de Mercado: €{player.valor}M</h2>
    </div>
    <br></br>
    </>);

  return (
    <main className="App">
      <Appbar/>
      <br></br>
      <br></br>
      {isLoading ? <LoadingSpinner /> : club_template}
      <Bottom/>
    </main>
  );
}
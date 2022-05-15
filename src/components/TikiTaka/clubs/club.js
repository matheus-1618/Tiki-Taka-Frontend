import React from "react";
import "./clubs.css";
import axios from "axios";
import { Link,useParams  } from "react-router-dom";
import { useState,useEffect, } from "react";
import Appbar from "../appbar/appbar";
import Bottom from "../bottombar/bottombar";
import { GiAges,GiTShirt,GiBabyfootPlayers,GiModernCity,GiSoccerBall,GiSoccerField,GiBookCover,GiThreeFriends,GiPodium,GiTie,GiMoneyStack,GiArena,GiTeamUpgrade } from "react-icons/gi";
import LoadingSpinner from "../loading/loading";

export default function Club(props) {
 const [club, setClub] = useState([]);
 const [ players,setPlayers] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 let { id } = useParams(); 


 useEffect(() => {
    setIsLoading(true);
    const get_squad = async () =>
    {let response  = await  axios
    .get(`https://sleepy-wave-09569.herokuapp.com/squads/${id}`)
    .then((res) => setPlayers(res.data));}

    const get_club = async () =>
        {let response  = await  axios
        .get(`https://sleepy-wave-09569.herokuapp.com/clubs/${id}`)
        .then((res) =>{ setClub(res.data);setIsLoading(false)});}

      get_squad().catch(console.error);
      get_club().catch(console.error);      
    
     }, []);

     

 const club_template = (
    <>
    <div className="cabecalho">
        <img className="image-clubs" src={club.emblema}/>
        <h1 className="letra-clube">{club.nome}</h1>
    </div>
    <br></br>
    <div className="dados">
        <h2 className="detalhes-clubes"><GiModernCity/> Cidade: {club.cidade}</h2>
        <h2 className="detalhes-clubes"><GiBookCover/> Data de fundação: {club.data_fundacao}</h2>
        <h2 className="detalhes-clubes"><GiThreeFriends/> Sócios cadastrados: {club.socios} pessoas</h2>
        <h2 className="detalhes-clubes"><GiTie/> Treinador: {club.treinador}</h2>
        <h2 className="detalhes-clubes"><GiSoccerBall/> Liga: {club.liga}</h2>
        <h2 className="detalhes-clubes"><GiPodium/> Colocação atual: {club.colocacao}° lugar</h2>
        <h2 className="detalhes-clubes"><GiMoneyStack/> Valor de Mercado: €{club.valor}M</h2>
        <h2 className="detalhes-clubes"><GiArena/> Estádio: {club.estadio_nome}</h2>
        <h2 className="detalhes-clubes"><GiTeamUpgrade/>Capacidade: {club.estadio_lotacao}</h2>
    </div>
    <br></br>
    <h1 className="letra"><GiBabyfootPlayers/> Elenco</h1>
    <div className="cardclubs-container">
    {players.map((player) => (
          <Link to={`/players/${player.id}`} className="link-players">
          <div className="card">
            <div className="soccerIcons">
            <h1 className="card-title">{player.name}</h1>
            </div>
            <img className="imageplayer" src={player.image}/>
            <div className="soccerIcons">
              <h2><GiAges/> Idade: {player.age}</h2>
              {player.shirtNumber ? (<h1><GiTShirt/> Camisa: {player.shirtNumber}</h1>) : 
              (<h1><GiTShirt/> Camisa: 10</h1>)}
            </div>
            <div className="card-content"></div>
            <div className="details">
            </div>
          </div>
          </Link>
          ))}
    </div></>);

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
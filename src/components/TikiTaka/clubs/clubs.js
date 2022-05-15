import React from "react";
import "./clubs.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Appbar from "../appbar/appbar";
import Bottom from "../bottombar/bottombar";
import LoadingSpinner from "../loading/loading";

export default function Clubs(props) {
 const [clubs, setClubs] = useState([]);
 const [isLoading, setIsLoading] = useState(true); 
 const clubs_template = (<>
 <br></br>
 <br></br>
 <h1 className="letra">CLUBES</h1>
 <h2 className="descricao">Clubes relevantes pesquisados na comunidade Tiki-Taka</h2>
 <div className="cardclubs-container">
 {clubs.map((club) => (
  <Link to={`/clubs/${club.id}`} className='link'>
      <div className="card-clubs">
      <img className="image-club" src={club.emblema}/>
      <h1>{club.nome.split(' ').slice(0,3).join(" ")}</h1>
      </div>
  </Link>
 ))}
 </div></>)

  useEffect(() => {
    axios
      .get("https://sleepy-wave-09569.herokuapp.com/clubs")
      .then((res) => {setClubs(res.data);setIsLoading(false)});
  }, []);

  return (
    <main className="App">
      <Appbar/>
      {isLoading ? <LoadingSpinner/> : clubs_template}
      <Bottom/>
    </main>
  );
}
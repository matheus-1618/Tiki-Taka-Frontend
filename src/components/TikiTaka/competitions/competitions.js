import React from "react";
import "./competitions.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Appbar from "../appbar/appbar";
import Bottom from "../bottombar/bottombar";


export default function Competitions(props) {
  return (
    <main className="App">
      <Appbar/>
      <br></br>
      <br></br>
      <h1 className="letra">COMPETIÇÕES</h1>
      <h2 className="descricao">Competições disponíveis para visualização das tabelas</h2>
      <div className="cardcompetitions-container">
        <Link to="/GB1" className="link-com">
          <a className="card-competitions">
              <img className="image-com" src="../../premier.png"/>
          </a>
        </Link>

        <Link to="/ES1" className="link-com">
          <a className="card-competitions">
              <img className="image-com" src="../../laliga.png"/>
          </a>
        </Link>
        
        <Link to="/IT1" className="link-com">
          <a className="card-competitions">
              <img className="image-com" src="../../seriea.png"/>
          </a>
        </Link>

        <Link to="/FR1" className="link-com">
          <a className="card-competitions">
              <img className="image-com" src="../../ligue1.png"/>
          </a>
        </Link>

        <Link to="/L1" className="link-com">
          <a className="card-competitions">
              <img className="image-com" src="../../bundes.png"/>
          </a>
        </Link>

        <Link to="/PO1" className="link-com">
          <a className="card-competitions">
              <img className="image-com" src="../../portugal.png"/>
          </a>
        </Link>

        <Link to="/BRA1" className="link-com">
          <a className="card-competitions">
              <img className="image-com" src="../../brasileirao.jpg"/>
          </a>
        </Link>

        <Link to="/NL1" className="link-com">
          <a className="card-competitions">
              <img className="image-com" src="../../eredvise.png"/>
          </a>
        </Link>
      </div>
      <Bottom/>
    </main>
  );
}
import React from "react";
import "./index.css";
import Appbar from "./appbar/appbar";
import Searchbar from "./searchbar/searchbar";
import Bottom from "./bottombar/bottombar";


export default function Home(props) {
  return (
    <main className="App">
      <Appbar/>
      <div className="center">
        <h1 className="letra">POR DENTRO DAS 4 LINHAS</h1>
        <Searchbar/>
      </div>
      <Bottom/>
    </main>
  );
}
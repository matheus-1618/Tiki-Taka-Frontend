import React from "react";
import { GoMarkGithub } from "react-icons/go";
import "./bottombar.css";

export default function Bottom(props) {
  return (
    <div className="bottombar">
    <img className = "logo" src="/Tiki-taka.png" />
    <div className="bot">
      <a className="git" href="https://github.com/matheus-1618">
        <h1 > <GoMarkGithub/> Matheus</h1>
      </a>
      <a className="git" href="https://github.com/niveaabreu">
        <h1 ><GoMarkGithub/> Nívea</h1>
      </a>
    </div>
  </div>
  );
}
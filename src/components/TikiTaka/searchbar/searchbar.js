import React from "react";
import "./searchbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { GiSoccerKick,GiPoliceBadge,GiTrophyCup} from 'react-icons/gi';
import axios from "axios";
import LoadingSpinner from "../loading/loading";


export default function Searchbar(props) {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [requisicao, setRequisicao] = useState('');
  
  const options = {
    method: 'GET',
    url: 'https://transfermarket.p.rapidapi.com/search',
    params: {query: requisicao},
    headers: {
      'X-RapidAPI-Host': 'transfermarket.p.rapidapi.com',
      'X-RapidAPI-Key': '97167c7cc2mshbf62f83c1618b15p1d1cb2jsn097e721239cf'
    }
  };

  let getInputValue = (event)=>{
    setIsError(false);
    setIsEmpty(false);
    setRequisicao(event.target.value);
};

  function sendPlayer(text){
    if (requisicao != ''){
      setIsLoading(true);
      axios.request(options).then(function (response) {
        let id = response.data['players'][0]['id']; 
        navigate(`/players/${id}`);
        setIsLoading(false);
      }).catch(function (error) {
        console.error(error);
        setIsError(true);
        setIsLoading(false);
      });
    }
    else{
      setIsEmpty(true);
    }
  }

  function sendClub(text){
    if (requisicao != ''){
      setIsLoading(true);
      axios.request(options).then(function (response) {
        let id = response.data['clubs'][0]['id']; 
        navigate(`/clubs/${id}`);
        setIsLoading(false);
      }).catch(function (error) {
        console.error(error);
        setIsError(true);
        setIsLoading(false);
      });
    }
    else{
      setIsEmpty(true);
    }
  }

  async function sendCompetition(text){
    const leagues =  ['BRA1','GB1','NL1','IT1','PO1','L1','ES1','FR1'];
    if (requisicao != ''){
      setIsLoading(true);
      axios.request(options).then(function (response) {
        let id = response.data['competitions'][0]['id'];
        if (leagues.includes(id)){
          navigate('/'+id);
        }
        else{
          setIsError(true);
        }
        setIsLoading(false);
      }).catch(function (error) {
        setIsLoading(false);
          alert("Não foi possível efetuar sua busca!")
        console.error(error);
        
      });
    }
    else{
      setIsEmpty(true);
    }
  }
  const inputerror = (<>
  <input onChange={getInputValue} className="form-card-title" placeholder="Solicitação não encontrada" />
  </>)
  const inputempty = (<>
    <input onChange={getInputValue} className="form-card-title" placeholder="É preciso digitar!" />
    </>)
  const input = (<>
   <input onChange={getInputValue} className="form-card-title" placeholder="O que você quer procurar?" />
  </>)
  const searchbar = (
    <><div className="form-card">
      <h1 className="search"><AiOutlineSearch /></h1>
      {isError ? inputerror : (isEmpty ? inputempty : input)}
      </div><div className="inputButtons">
        <button onClick={sendPlayer} className="inputButton"><GiSoccerKick />Jogador</button>
        <button onClick={sendClub} className="inputButton"><GiPoliceBadge />Clube</button>
        <button onClick={sendCompetition} className="inputButton"><GiTrophyCup />Competição</button>
      </div></>);

  return (
    <div className="itens">
      {isLoading ? <LoadingSpinner /> : searchbar}
      </div>
  );
}
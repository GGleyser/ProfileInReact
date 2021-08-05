import React from 'react';

export default function Projetos(props)
{
  let id = props.match.params.nome;

  return (
    <div>
      {id == undefined ? <AllProjetos/> : <IdProjeto id={id}/>}
    </div>
  );
}

const IdProjeto = (props) =>{
  return(
    <h3>Projeto id: {props.id}</h3>
  );
}

const AllProjetos = () =>{
  return(
    <>
      <h3>Projetos:</h3>
      <ul>
        <li>CTe</li>
        <li>Sys</li>
        <li>RS</li>
      </ul>
    </>
  );
}
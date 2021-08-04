import React from 'react';
import { useParams } from 'react-router';

export default function Projetos(props)
{
  let { id } = useParams();
  if(id != "CTe"){  }

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}
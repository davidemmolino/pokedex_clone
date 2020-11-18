import React from 'react';

export default function SearchResult(props) {

  return (
    <div>
      <h2>props.name</h2>
      <p>{props.id}</p>
      <p>{props.name} is of type {props.type} and has {props.forms}</p>
    </div>
  )
}

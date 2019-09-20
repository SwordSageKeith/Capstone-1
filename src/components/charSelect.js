import React from "react";

function CharSelect(props){

  return (
    <section className="selectButtons">
      <p>Character Select</p>
      <ul>
        {props.names.map((name, i) => <li key={i}><button className = "char" onClick={() => props.func(name)}>{name}</button></li>)}
      </ul>
    </section>
  )
}
export default CharSelect
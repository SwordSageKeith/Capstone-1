import React from "react";

function CharSelect(props){

  return (
    <section>
      <ul>
        {props.names.map((name, i) => <li key={i}><button onClick={() => props.func(name)}>{name}</button></li>)}
      </ul>
    </section>
  )
}
export default CharSelect
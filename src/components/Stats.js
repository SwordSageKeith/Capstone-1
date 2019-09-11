import React from 'react';

function Stats(){
  return (
    <form  className="flexColumn">
      <label for="str">STRENGTH: </label><input id="str"/>
      <label for="con">CONSTITUTION: </label><input id="con"/>
      <label for="dex">DEXTERITY: </label><input id="dex"/>
      <label for="wis">WISDOM: </label><input id="wis"/>
      <label for="int">INTELIGENCE: </label><input id="int"/>
      <label for="cha">CHARISMA: </label><input id="cha"/>
      <button>Next</button>
    </form>
  )
}

export default Stats;
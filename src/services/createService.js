import React from 'react'

const createService = {
  stats(){
    return (
      <form id = "create" className="flexColumn">
        <label htmlFor="str">STRENGTH: </label><input id="str" required type="number" defaultValue='1'/>
        <label htmlFor="con">CONSTITUTION: </label><input id="con" required type="number" defaultValue='1'/>
        <label htmlFor="dex">DEXTERITY: </label><input id="dex" required type="number" defaultValue='1'/>
        <label htmlFor="wis">WISDOM: </label><input id="wis" required type="number" defaultValue='1'/>
        <label htmlFor="int">INTELIGENCE: </label><input id="int" required type="number" defaultValue='1'/>
        <label htmlFor="cha">CHARISMA: </label><input id="cha" required type="number" defaultValue='1'/>
      </form>
    )
  },

  char(){
    return(
      <form id = "create" className = "Char flexColumn">
        <label htmlFor="name">Name:</label><input id="name" required defaultValue='1'/>
        <label htmlFor="race">Race:</label><input id="race" required defaultValue='1'/>
        <label htmlFor="class">Class:</label><input id="class"required defaultValue='1'/>
        <label htmlFor="level">Level:</label><input id="level"required type="number" defaultValue='1'/>
        <label htmlFor="hp">Health:</label><input id="hp" required type="number" defaultValue='1'/>
        <label htmlFor="ac">Armor Class:</label><input id="ac" required type="number" defaultValue='1'/>
        <label htmlFor="bab">Base Attack Bonus:</label><input id="bab" required type="number" defaultValue='1'/>
      </form>
    )
  },
  skills(){
    return(
      <form id = "create" className = "skills flexColumn">
        <label htmlFor="acrobatics">Acrobatics:</label><input id="acrobatics" defaultValue='1'/>
        <label htmlFor="animal">Animal Handling:</label><input id="animal" defaultValue='1'/>
        <label htmlFor="arcana">Arcana:</label><input id="arcana" defaultValue='1'/>
        <label htmlFor="athletics">Athletics:</label><input id="athletics" defaultValue='1'/>
        <label htmlFor="deception">Deception:</label><input id="deception" defaultValue='1'/>
        <label htmlFor="history">History:</label><input id="history" defaultValue='1'/>
        <label htmlFor="insight">Insight:</label><input id="insight" defaultValue='1'/>
        <label htmlFor="intimidation">Intimidation:</label><input id="intimidation" defaultValue='1'/>
        <label htmlFor="investigation">Investigation:</label><input id="investigation" defaultValue='1'/>
        <label htmlFor="medicine">Medicine:</label><input id="medicine" defaultValue='1'/>
        <label htmlFor="nature">Nature:</label><input id="nature" defaultValue='1'/>
        <label htmlFor="perception">Perception:</label><input id="perception" defaultValue='1'/>
        <label htmlFor="performance">Performance:</label><input id="performance" defaultValue='1'/>
        <label htmlFor="persuasion">Persuasion:</label><input id="persuasion" defaultValue='1'/>
        <label htmlFor="religion">Religion:</label><input id="religion" defaultValue='1'/>
        <label htmlFor="sleight">Sleight of Hand:</label><input id="sleight" defaultValue='1'/>
        <label htmlFor="stealth">Stealth:</label><input id="stealth" defaultValue='1'/>
        <label htmlFor="survival">Survival:</label><input id="survival" defaultValue='1'/>
      </form>
    )
  }
}

export default createService
import React from 'react'

const createService = {
  stats(){
    return (
      <div id = "create" className="flexColumn">
        <label htmlFor="str">STRENGTH: </label><input id="str" required className = "create" type="number" defaultValue='12'/>
        <label htmlFor="con">CONSTITUTION: </label><input id="con" required className = "create" type="number" defaultValue='12' />
        <label htmlFor="dex">DEXTERITY: </label><input id="dex" required className = "create" type="number" defaultValue='12' />
        <label htmlFor="wis">WISDOM: </label><input id="wis" required className = "create" type="number" defaultValue='12' />
        <label htmlFor="int">INTELIGENCE: </label><input id="int" required className = "create" type="number" defaultValue='12' />
        <label htmlFor="cha">CHARISMA: </label><input id="cha" required className = "create" type="number" defaultValue='12' />
      </div>
    )
  },

  char(){
    return(
      <div id = "create" className = "Char flexColumn">
        <label htmlFor="name">Name:</label><input id="name" required className = "create" placeholder='name' />
        <label htmlFor="race">Race:</label><input id="race" required className = "create" placeholder='race' />
        <label htmlFor="class">Class:</label><input id="class"required className = "create" placeholder='class' />
        <label htmlFor="level">Level:</label><input id="level"required className = "create" type="number" defaultValue='1' />
        <label htmlFor="hp">Health:</label><input id="hp" required className = "create" type="number" defaultValue='10' />
        <label htmlFor="ac">Armor Class:</label><input id="ac" required className = "create" type="number" defaultValue='10' />
        <label htmlFor="bab">Base Attack Bonus:</label><input id="bab" required className = "create" type="number" defaultValue='1' />
        <label htmlFor="desc">Description:</label><input id="desc" required className = "create" type="text" placeholder='description' />
      </div>
    )
  },
  skills(){
    return(
      <div id = "create" className = "skills flexColumn">
        <label htmlFor="acrobatics">Acrobatics:</label><input id="acrobatics" defaultValue='0' required className = "create"/>
        <label htmlFor="animal">Animal Handling:</label><input id="animal" defaultValue='0' required className = "create"/>
        <label htmlFor="arcana">Arcana:</label><input id="arcana" defaultValue='0' required className = "create"/>
        <label htmlFor="athletics">Athletics:</label><input id="athletics" defaultValue='0' required className = "create"/>
        <label htmlFor="deception">Deception:</label><input id="deception" defaultValue='0' required className = "create"/>
        <label htmlFor="history">History:</label><input id="history" defaultValue='0' required className = "create"/>
        <label htmlFor="insight">Insight:</label><input id="insight" defaultValue='0' required className = "create"/>
        <label htmlFor="intimidation">Intimidation:</label><input id="intimidation" defaultValue='0' required className = "create"/>
        <label htmlFor="investigation">Investigation:</label><input id="investigation" defaultValue='0' required className = "create"/>
        <label htmlFor="medicine">Medicine:</label><input id="medicine" defaultValue='0' required className = "create"/>
        <label htmlFor="nature">Nature:</label><input id="nature" defaultValue='0' required className = "create"/>
        <label htmlFor="perception">Perception:</label><input id="perception" defaultValue='0' required className = "create"/>
        <label htmlFor="performance">Performance:</label><input id="performance" defaultValue='0' required className = "create"/>
        <label htmlFor="persuasion">Persuasion:</label><input id="persuasion" defaultValue='0' required className = "create"/>
        <label htmlFor="religion">Religion:</label><input id="religion" defaultValue='0' required className = "create"/>
        <label htmlFor="sleight">Sleight of Hand:</label><input id="sleight" defaultValue='0' required className = "create"/>
        <label htmlFor="stealth">Stealth:</label><input id="stealth" defaultValue='0' required className = "create"/>
        <label htmlFor="survival">Survival:</label><input id="survival" defaultValue='0' required className = "create"/>
      </div>
    )
  }
}

export default createService
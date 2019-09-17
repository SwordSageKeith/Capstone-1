import React from "react";
import apiService from "../services/api-service";
import CharSelect from './charSelect'

class Character extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      char: undefined,
      info: undefined,
      stats: undefined,
      skills: undefined,
      names: []
    }
  };

  getInfo(i = 0) {
    return apiService.getChar().then(res => {
      let x = []
      res.forEach(char => {
        x.push(char.char.char_name)
      })
      this.setState({
        char: res[i].char,
        info: res[i].info,
        stats: res[i].stats,
        skills: res[i].skills,
        names: x
      })
    });
  }

  changeChar = (name) => {
    console.log('call')
    for (let i = 0; i < this.state.names.length; i++){
      if (name === this.state.names[i])
        this.getInfo(i)
    }
  }

  render(){
    if (!localStorage.getItem("dnd-client-auth-token")) 
    this.props.history.push("/login");
  
    if(this.state.char === undefined){
      this.getInfo()
      return (<main></main>)
    } else {
      return (
        <main>
          <CharSelect names = {this.state.names} func = {this.changeChar} key = '1'/>
            <section className="notskills">
              <section className="info">
                <p>Name: {this.state.char.char_name}</p>
                <p>Class: {this.state.char.class}</p>
                <p>Race: {this.state.char.race}</p>
                <p>Level: {this.state.char.char_level}</p>
                <p>etc: xxxxxx</p>
              </section>
    
              <section className="stats">
                <p>STR: {this.state.stats.str}</p>
                <p>DEX: {this.state.stats.dex}</p>
                <p>CON: {this.state.stats.con}</p>
                <p>WIS: {this.state.stats.wis}</p>
                <p>INT: {this.state.stats.intl}</p>
                <p>CHA: {this.state.stats.cha}</p>
                <button>Generate stats</button>
              </section>
    
              <section className="hp">
                <p>HP: {this.state.info.hp}</p>
                <p>AC: {this.state.info.ac}</p>
                <p>BAB: {this.state.info.bab}</p>
                <p>REFLEX: {this.state.info.ref}</p>
                <p>FORTITUDE: {this.state.info.fort}</p>
                <p>CONSTITUTION: {this.state.info.con}</p>
              </section>
    
              <section>
                <p>
                {this.state.info.descrip}
                </p>
              </section>
            </section>
            <section className="skills">
              <p>Acrobatics: {this.state.skills.acrobatics}</p>
              <p>Animal Handling: {this.state.skills.animal_handling}</p>
              <p>Arcana: {this.state.skills.arcana}</p>
              <p>Atheletics: {this.state.skills.athletics}</p>
              <p>Deception: {this.state.skills.deception}</p>
              <p>History: {this.state.skills.history}</p>
              <p>Insight: {this.state.skills.insight}</p>
              <p>Intimidation: {this.state.skills.intimidation}</p>
              <p>Investigation: {this.state.skills.investigation}</p>
              <p>Medicine: {this.state.skills.medicine}</p>
              <p>Nature: {this.state.skills.nature}</p>
              <p>Perception: {this.state.skills.perception}</p>
              <p>Performance: {this.state.skills.performance}</p>
              <p>Persuasion: {this.state.skills.persuasion}</p>
              <p>Religion: {this.state.skills.religion}</p>
              <p>Sleight of Hand: {this.state.skills.sleight_of_hand}</p>
              <p>Stealth: {this.state.skills.stealth}</p>
              <p>Survival: {this.state.skills.survival}</p>
            </section>
          </main>
      );
    }
    
  }
}

export default Character;

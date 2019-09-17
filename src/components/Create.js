import React from 'react';
import createService from '../services/createService'
import TokenService from '../services/token-service'
import apiService from '../services/api-service'

class Create extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      char: undefined,
      info: undefined,
      stats: undefined,
      skills: undefined,
      sendChar: undefined,
      sendStats: undefined,
      sendSkills: undefined,
      step: 0
    }
  };

  onNext = ev => {
    //ev.preventDefault();
    let x = document.getElementById("create").elements
    if(this.state.step === 0){
      this.setState({
        sendChar:{
          name: x.name.value,
          race: x.race.value,
          class: x.class.value,
          level: x.level.value,
          hp: x.hp.value,
          ac: x.ac.value,
          bab: x.bab.value
        }
      })
      x.name.value = ''
      x.race.value = ''
      x.class.value = ''
      x.level.value = ''
      x.hp.value = ''
      x.ac.value = ''
      x.bab.value = ''
    } else if (this.state.step === 1){
      this.setState({
        sendStats:{
          str: x.str.value,
          dex: x.dex.value,
          con: x.con.value,
          wis: x.wis.value,
          int: x.int.value,
          cha: x.cha.value
        }
      })
      x.str.value = ''
      x.dex.value = ''
      x.con.value = ''
      x.wis.value = ''
      x.int.value = ''
      x.cha.value = ''
    } else {
      this.setState({
        sendSkills: {
          ownr: TokenService.getID(),
          acrobatics: x.acrobatics.value,
          animal_handling: x.animal.value,
          arcana: x.arcana.value,
          athletics: x.athletics.value,
          deception: x.deception.value,
          history: x.history.value,
          insight: x.insight.value,
          intimidation: x.intimidation.value,
          investigation: x.investigation.value,
          medicine: x.medicine.value,
          nature: x.nature.value,
          perception: x.perception.value,
          performance: x.performance.value,
          persuasion: x.persuasion.value,
          religion: x.religion.value,
          sleight_of_hand: x.sleight.value,
          stealth: x.stealth.value,
          survival: x.survival.value
        }
      }, () => {
        apiService.sendChar([this.state.sendChar, this.state.sendStats,this.state.sendSkills])
        this.props.history.push('/home')
      })
    }
    this.setState({step: this.state.step+1})
  }

  onLast = ev => {

  }


  render(){
    if(this.state.step === 0){
      return (
        <div>
          {createService.char()}
          <button onClick={() => this.onNext()}>Next</button>
        </div>
       )
    } else if (this.state.step === 1){
      return (
        <div>
          {createService.stats()}
          <button onClick={() => this.onNext()}>Next</button>
        </div>
       )
    } else {
      return (
        <div>
          {createService.skills()}
          <button onClick={() => this.onNext()}>Next</button>
        </div>
       )
    }


   
  }

}

export default Create;
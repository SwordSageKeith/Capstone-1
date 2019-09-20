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
    ev.preventDefault();
    let x = ev.target
    if(this.state.step === 0){
      this.setState({
        sendChar:{
          name: x.name.value,
          race: x.race.value,
          class: x.class.value,
          level: x.level.value,
          hp: x.hp.value,
          ac: x.ac.value,
          bab: x.bab.value,
          desc: x.desc.value
        }
      })
      x.name.value = '12'
      x.race.value = '12'
      x.class.value = '12'
      x.level.value = '12'
      x.hp.value = '12'
      x.ac.value = '12'
      x.bab.value = '0'
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
      x.str.value = '0'
      x.dex.value = '0'
      x.con.value = '0'
      x.wis.value = '0'
      x.int.value = '0'
      x.cha.value = '0'
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

  render(){
    if(this.state.step === 0){
      return (
        <form className = "center" onSubmit={this.onNext}>
          {createService.char()}
          <button type="submit" id="next" >Next</button>
        </form>
       )
    } else if (this.state.step === 1){
      return (
        <form className = "center" onSubmit={this.onNext}>
          {createService.stats()}
          <button type="submit" id="next" >Next</button>
        </form>
       )
    } else {
      return (
        <form className = "center" onSubmit={this.onNext}>
          {createService.skills()}
          <button type="submit" id="next" >Next</button>
        </form>
       )
    }


   
  }

}

export default Create;
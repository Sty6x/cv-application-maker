import './App.css';
import React from 'react';
import SkillList from './components/skillList'
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      skills:[],
      input: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.addSkill = this.addSkill.bind(this);
  }

  handleInput(e){
    this.setState({
      input: e.target.value,
    },()=>{
      console.log(this.state)
    } )
  }
 
  addSkill(){
    this.setState({
      skills: this.state.skills.concat(this.state.input)
    },()=>{
      console.log(this.state)
    })
  }

  render(){
    return(
      <div id='app-container'>
        <input onChange={this.handleInput} type="text"/>
        <button onClick={this.addSkill} type='button'>Add Skill</button>
        <SkillList/>
      </div>
    )
  }

}

export default App;

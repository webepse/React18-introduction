import React, {Component, Fragment} from 'react';
import './App.css'
import Membre from './components/Membre';
import Button from './components/Button';

const league = {
  membre1 : {
    nom: "Batman",
    age: 26
  },
  membre2: {
    nom: "Superman",
    age: 46
  }, 
  membre3: {
    nom: "Wonder Woman",
    age: 79
  },
  membre4: {
    nom: "Catwoman",
    age: 31
  },
  membre5: {
    nom: "Napoléon",
    age: 4
  }
}

class App extends Component {
  state = { 
    league: league,
    plus: 2,
    isShow: false
   } 

  componentDidMount() {
    console.log('montage')
  }

  componentDidUpdate() {
    console.log("Je recharge mon composant et mise à jour")
  }

  componentWillUnmount() {
    console.log('démontage')
  }

  handleClick = (id,nb) => {
    const league = {...this.state.league}
    league[id].age += nb
    this.setState({league})
  }

  handleShow = () => {
    const isShow = !this.state.isShow // ! retourne l'inverse (toggle)
    this.setState({isShow})
  }

  handleChange = (event,id) => {
    const league = {...this.state.league}
    const nom = event.target.value
    league[id].nom = nom
    this.setState({league:league})
  }

  hideName = (id) => {
    const league = {...this.state.league}
    league[id].nom = "X"
    league[id].age = 0
    this.setState({league})
  }
   
  render() { 
    const list = Object.keys(this.state.league).map(iteration => {
      return (
        <Membre 
          key={iteration} 
          age={this.state.league[iteration].age} 
          nom={this.state.league[iteration].nom} 
          handleChange = {(event) => this.handleChange(event,iteration)} 
          hideName = {() => this.hideName(iteration)}
          plus = {this.state.plus} 
          handleClick = {()=>{this.handleClick(iteration,this.state.plus)}}
        />
      )
    })
    return (
        <Fragment>
          <div className='App'>
            <h1>React App</h1>
            <h4>{this.props.titre}</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae illum harum pariatur quia deserunt ad accusantium blanditiis quaerat amet, quae reiciendis eveniet tenetur totam accusamus, minima nulla. Adipisci aspernatur iusto necessitatibus aliquid. Eum rem recusandae aliquid rerum labore distinctio omnis tempore aspernatur fugiat corrupti voluptas, nisi quasi quae. Excepturi iste nesciunt sit distinctio eveniet incidunt atque commodi minus dolor fugit!</p>
            {list}
          </div>
        </Fragment>
    )
    // return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'React App'));
  }
}
 
export default App;
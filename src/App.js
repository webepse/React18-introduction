import React, {Component, Fragment} from 'react';
import './App.css'
import Membre from './components/Membre';
import Button from './components/Button';

const league = {
  membre1 : {
    nom: "Batman",
    age: 46
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
  }
}

class App extends Component {
  state = { 
    league: league,
    plus: 2
   } 

  handleClick = (nb) => {
    // modification du state
    // copier le state
    const league = {...this.state.league}
    // modifier
    league.membre1.age += nb
    // set le state
    // this.setState({league:league})
    this.setState({league})

  }
   
  render() { 
    // const {titre} = this.props
    return (
        <Fragment>
          <div className='App'>
            <h1>React App</h1>
            <h4>{this.props.titre}</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae illum harum pariatur quia deserunt ad accusantium blanditiis quaerat amet, quae reiciendis eveniet tenetur totam accusamus, minima nulla. Adipisci aspernatur iusto necessitatibus aliquid. Eum rem recusandae aliquid rerum labore distinctio omnis tempore aspernatur fugiat corrupti voluptas, nisi quasi quae. Excepturi iste nesciunt sit distinctio eveniet incidunt atque commodi minus dolor fugit!</p>
            {this.state.league.membre1.nom}
            <Membre 
              nom={this.state.league.membre1.nom} 
              age={this.state.league.membre1.age} 
            />
            <Membre 
              nom={this.state.league.membre2.nom} 
              age={this.state.league.membre2.age} 
            />
            <Membre 
              nom="Napoléon"
              age={4}
            >
              Je suis un empereur
            </Membre>
            <Button 
              plus = {this.state.plus}
              vieillir = {() => this.handleClick(this.state.plus)}
            />

          </div>
        </Fragment>
    )
    // return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'React App'));
  }
}
 
export default App;
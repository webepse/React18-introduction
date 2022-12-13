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

  handleShow = () => {
    const isShow = !this.state.isShow // ! retourne l'inverse (toggle)
    this.setState({isShow})
  }
   
  render() { 
    // const {titre} = this.props
    // ["membre1","membre2","membre3","membre4"]
    // const tab = [1,2,3,4]
    // tab.map(iteration => { return iteration+1 })
    // [2,3,4,5]
    // this.state.league.membre1.age
    // this.state.league.iteration.age
    // this.state.league[iteration].age
    const list = Object.keys(this.state.league).map(iteration => {
      return (
        <Membre key={iteration} age={this.state.league[iteration].age} nom={this.state.league[iteration].nom} />
      )
    })
    return (
        <Fragment>
          <div className='App'>
            <h1>React App</h1>
            <h4>{this.props.titre}</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae illum harum pariatur quia deserunt ad accusantium blanditiis quaerat amet, quae reiciendis eveniet tenetur totam accusamus, minima nulla. Adipisci aspernatur iusto necessitatibus aliquid. Eum rem recusandae aliquid rerum labore distinctio omnis tempore aspernatur fugiat corrupti voluptas, nisi quasi quae. Excepturi iste nesciunt sit distinctio eveniet incidunt atque commodi minus dolor fugit!</p>
            {list}
            <Membre 
              age={4}
              nom="Napoléon"
            >
              {
                this.state.isShow ? <strong>Je suis l'empereur</strong> : null
              }
              <button onClick={this.handleShow}>
                {this.state.isShow ? 'Cacher' : 'Montrer'}
              </button>

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
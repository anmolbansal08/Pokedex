import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      pokemons: [],
      search: "",
    };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=500")
      .then((response) => response.json())
      .then((name) => this.setState({ pokemons: name.results }));
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { pokemons, search } = this.state;
    const fileteredPokemons = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Pokedex</h1>

        <CardList pokemons={fileteredPokemons}></CardList>
      </div>
    );
  }
}

export default App;

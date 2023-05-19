import React, { Component } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Simpsons from "./components/Simpsons";
import "./App.css";

class App extends Component {
  state = {};

  async componentDidMount() {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );
    this.setState({ simpsons: data });
    console.log(data);
  }

  onDelete = (quote) => {
    const copyState = [...this.state.simpsons];
    const indexOf = copyState.findIndex((character) => {
      return quote === character.quote;
    });
    copyState.splice(indexOf, 1);
    this.setState({ simpsons: copyState });
  };

  render() {
    const { simpsons } = this.state;

    if (!simpsons) return <Loading />;

    return (
      <>
        <h1>Total no of liked chars #</h1>
        <Simpsons simpsons={simpsons} onDelete={this.onDelete} />
      </>
    );
  }
}

export default App;

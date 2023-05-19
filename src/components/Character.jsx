import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Delete from "./Delete";

class Character extends Component {
  state = { like: false };

  onLikeToggle = () => {
    this.setState({ like: !this.state.like });
  };

  render() {
    const { character, characterDirection, quote, image } = this.props.item;
    const { like } = this.state;

    if (characterDirection === "Right") {
      return (
        <div className="characterContainer">
          <Name
            character={character}
            like={like}
            onLikeToggle={this.onLikeToggle}
          />
          <Quote quote={quote} />
          <Image image={image} like={like} />
          <Delete quote={quote} onDelete={this.props.onDelete} />
        </div>
      );
    } else {
      return (
        <div className="characterContainer">
          <Image image={image} like={like} />
          <Name
            character={character}
            like={like}
            onLikeToggle={this.onLikeToggle}
          />
          <Quote quote={quote} />
          <Delete quote={quote} onDelete={this.props.onDelete} />
        </div>
      );
    }
  }
}

export default Character;

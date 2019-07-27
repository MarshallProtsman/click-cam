import React, { Component } from "react";
// import React from 'react';
// import logo from './logo.svg';
import Card from "./components/cards/card";
import Grid from "./components/grid/Grid";
// import ScoreCard from "./components/scorecard/scorecard"
import images from "./images.json";
import "./App.css";

// Creates an array to store which photos have been clicked.
// Will be cleared out after each round.
let clickedArr = [];

class App extends Component {
  //Sets state so we know how many have been clicked.
  state = {
    images,
    count: 0,
  // 9 is how many images I'm using and therefore the goal
    total: 9
  };

  Clicked = event => {
    //gotta prevent that default :)
    event.preventDefault();


    const userChoice = event.currentTarget.id;
    // if the indexof the clicked image is -1
    //(a.k.a. not found in the array) 
    //We know it hasn't been clicked yet and add 1
    //to the count and push it to the clickedArr
    if (clickedArr.indexOf(userChoice) === -1) {
      this.setState({ count: this.state.count + 1 });
      clickedArr.push(userChoice);

      // Never implemented this
      // let numberLeft = this.state.total - this.state.count;
      // console.log(numberLeft);

      // If the Array of clicked photos is 9
      // start the winning alerts and resets the
      // score and clickedArr
      if (clickedArr.length === 9) {
        alert("Saving your victory photo!");
        alert("You won!");
        // this.setState({total : 9})
        clickedArr.length = 0;
        this.setState({ count: 0 });
      }
      //uses the shuffle function below on the images
      this.shuffle(images);

      // if the above "if" is not utilized
      // we go here, alert of a lost game,
      // and reset.
    } else if (this.state.count < this.state.total) {
      alert("you lose");
      clickedArr.length = 0;
      // this.setState({total : 9});
      this.setState({ count: 0 });
      this.shuffle(images);
    }
  };

  shuffle = images => {
    var j, x, i;
    for (i = images.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = images[i];
      images[i] = images[j];
      images[j] = x;
    }
    return console.log(images);
  };

  render() {
    return (
      <>
      <h1>
        Vintage Camera Clicky Game
      </h1>
        <h3 id="scorecard">
          You currently have {this.state.count} out of {this.state.total}!
        </h3>
        <div className="photos">
          <Grid>
            {this.state.images.map((image, i) => (
              <Card
                id={image.id}
                alt={image.name}
                src={image.imageURL}
                onClick={this.Clicked}
                key={i}
              />
            ))}
          </Grid>
        </div>
      </>
    );
  }
}
export default App;

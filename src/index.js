import React from "react";
import ReactDOM from "react-dom";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickNumber: 0,
    };
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      clickNumber: (this.state.clickNumber += 1),
    });
  }

  render() {
    return (
      <div>
        <h3>Button example</h3>
        <button onClick={(event) => this.handleClick(event)}>
          example button
        </button>
        <p>
          <b>you have clicked the button {this.state.clickNumber} time/s</b>
        </p>
      </div>
    );
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieNameInputText: "",
      movieGenreInputText: "",
    };

    this.handelInputChange = this.handelInputChange.bind(this);
  }

  handelInputChange(event) {
    this.setState({
      movieNameInputText:
        event.target.id === "movie_name"
          ? event.target.value
          : this.state.movieNameInputText,
      movieGenreInputText:
        event.target.id === "movie_genre"
          ? event.target.value
          : this.state.movieGenreInputText,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(
      `you added: \n MOVIE: ${this.state.movieNameInputText} \n GENRE: ${this.state.movieGenreInputText}`
    );
  }

  render() {
    return (
      <div>
        <h3>Form example</h3>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Movie Name</label>
          <input
            type="text"
            placeholder="Movie Name...."
            id="movie_name"
            value={this.state.movieNameInputText}
            onChange={(event) => this.handelInputChange(event)}
          />
          <br />
          <label>Movie Genre</label>
          <input
            type="text"
            placeholder="Movie Genre...."
            id="movie_genre"
            value={this.state.movieGenreInputText}
            onChange={(event) => this.handelInputChange(event)}
          />
          <br />
          <input type="submit" value="Click Here" />
        </form>
      </div>
    );
  }
}

class Body extends React.Component {
  render() {
    return (
      <div>
        <Form />
        <hr />
        <Button />
      </div>
    );
  }
}

//==========================================================================//
ReactDOM.render(<Body />, document.getElementById("root"));

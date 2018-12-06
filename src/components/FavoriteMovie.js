import React, { Component } from 'react';
import ShowMovies from './ShowMovies'

class FavoriteMovie extends Component {
  constructor(props) {
    super(props);
    this.movieArr = [];

    const { profiles, movies, users } = this.props;

    this.movieArr = Object.keys(movies).map(key => {
      return [movies[key].name, []];
    });

    profiles.forEach(profile => {
      const userName = users[profile.userID].name;
      this.movieArr[profile.favoriteMovieID - 1][1].push(userName);
    });
  }

  render() {
    return (
      <div>
        <ShowMovies movieArr={this.movieArr} />
      </div>
    );
  }
}

export default FavoriteMovie;

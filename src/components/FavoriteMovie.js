import React, { Component } from 'react';

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
        {console.log(this.movieArr)}
        <h2>Forrest Gump</h2>
        <p>Liked By:</p>
        <ul>
          <li>Nicholas Lain</li>
        </ul>

        <h2>Get Out</h2>
        <p>Liked By:</p>
        <ul>
          <li>John Doe</li>
          <li>Autumn Green</li>
        </ul>

        <h2>Autumn Green</h2>
        <p>None of the current users liked this movie</p>
      </div>
    );
  }
}

export default FavoriteMovie;

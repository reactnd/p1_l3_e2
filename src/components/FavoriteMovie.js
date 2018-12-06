import React, { Component } from 'react';

class FavoriteMovie extends Component {

  constructor(props) {
    super(props);

    const {profiles, movies, users} = this.props;


    const movieArr = Object.keys(movies).map(key => {
      return [movies[key].name, []]
    });

    profiles.forEach(profile => {
      const userName = users[profile.userID].name;
      movieArr[profile.favoriteMovieID -1][1].push(userName)
    })


    console.log(movieArr)


    } 
 
  render() {

    const movieArr = this.movieArr

    return (
      <div>
        {console.log(movieArr)}
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

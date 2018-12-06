import React, { Component } from 'react';

class ShowMovies extends Component {
  render() {
    const { movieArr } = this.props;

    return (
      <div>
        {movieArr.map(movie => {
          const movieName = movie[0];
          return (
            <div key={movieName}>
              <h2>{movieName}</h2>
              {movie[1].length > 0 ? (
                <div>
                  <p>Liked By:</p>
                  <ul key={movieName}>
                    {movie[1].map(user => <li key={user}>{user}</li>)}     
                  </ul>
                </div>
              ) : (
                <p>None of the current users liked this movie</p>
              )}
            </div>
          );
        })}
       </div>
    );
  }
}

export default ShowMovies;

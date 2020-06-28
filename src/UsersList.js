import React, {Component} from 'react'

class UsersList extends Component {
  render(){
  console.log('Props', this.props.movies)
     return(
      <ol className='user-list'>
      {this.props.profiles.map((profile) =>{
       const userName = this.props.users[profile.userID].name;
       const movieName = this.props.movies[profile.favoriteMovieID].name;
     return(
        <li key={profile.id} className='user-list-item'>
          <p>{userName} favorite movie is {movieName}</p>
        </li>
      );
})}
      </ol>
     )
  }
}

export default UsersList;

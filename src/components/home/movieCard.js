import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MovieCard extends Component {
    render() {
        const {movie} = this.props;
        return (
        <div className="col s12 m6 l4 xl3" style={{height: '300px', width: '300px', marginBottom:'350px', position: 'inherit', backgroundColor: 'black'}}>
            <div className="card black" id="card" >
                <div className="card-image" style={{width:'fit-content', height:'fit-content', margin:'auto'}}>
                    <img src={movie.Poster} alt="movie cover"/>
                    {/* <p className="card-title flow-text" style={{textShadow: '0px 0px 10px #000000'}}>{movie.Title} - {movie.Year}</p> */}
                </div>
                <div className="card-content white-text grey darken-4">
                    <span>{movie.Title} - {movie.Year}</span>
                </div>
                <div className="card-action red accent-4 white-text" style={{height: '75px', textAlign: 'start', width:'100%'}}>
                    <Link to={'/movie/' + movie.imdbID}>more details</Link>
                </div>
            </div>
        </div>
        )
    }
}

export default MovieCard;
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchMovie, setLoading} from '../../actions/searchActions'
import Spinner from './spinner';
import { Link } from 'react-router-dom';

class Movie extends Component {
    componentDidMount(){
        this.props.fetchMovie(this.props.match.params.id);
        this.props.setLoading();
    }
    render() {
        const {loading, movie} = this.props;
        let movieInfo = (
            <React.Fragment>
            <div className="row">
                <div className="container col m3 l3 xl3 s10 offset-s1">
                    <img src={movie.Poster} alt="movie cover" style={{width: '100%', height: 'auto', marginTop:'40px'}}/>
                </div>
                <div className="col s10 m7 l7 xl7 offset-s1" style={{marginTop:'35px', marginBottom:'35px'}}>
                    <ul className="collection with-header white-text ">
                        <li className="collection-header black"><h4>{this.props.movie.Title} - {this.props.movie.Year}</h4></li>
                        <li className="collection-item black"><b>Released Date : </b><font className="grey-text text-lighten-1">{movie.Released}</font></li>
                        <li className="collection-item black"><b>Runtime : </b><font className="grey-text text-lighten-1">{movie.Runtime}</font></li>
                        <li className="collection-item black"><b>Genre : </b><font className="grey-text text-lighten-1">{movie.Genre}</font></li>
                        <li className="collection-item black"><b>Director : </b><font className="grey-text text-lighten-1">{movie.Director}</font></li>
                        <li className="collection-item black"><b>Writer : </b><font className="grey-text text-lighten-1">{movie.Writer}</font></li>
                        <li className="collection-item black"><b>Actors : </b><font className="grey-text text-lighten-1">{movie.Actors}</font></li>
                        <li className="collection-item black"><b>Plot : </b><font className="grey-text text-lighten-1">{movie.Plot}</font></li>
                        <li className="collection-item black"><b>Language : </b><font className="grey-text text-lighten-1">{movie.Language}</font></li>
                        <li className="collection-item black"><b>Country : </b><font className="grey-text text-lighten-1">{movie.Country}</font></li>
                        <li className="collection-item black"><b>Awards : </b><font className="grey-text text-lighten-1">{movie.Awards}</font></li>
                    </ul>
                    <a className="red accent-4 waves-effect waves-light btn-large" href={'https://www.imdb.com/title/' + movie.imdbID} target="_blank" rel="noopener noreferrer" style={{align:'auto', display:'block'}}>view on imdb</a>
                    <Link className="grey darken-4 waves-effect waves-light btn-large" to='/' style={{align:'auto', display:'block'}}>back to home</Link>
                </div>
            </div>
            </React.Fragment>
        )
        let content = loading ? <Spinner /> : movieInfo ;
        return (
            <div>{content}</div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading,
    movie: state.movies.movie
})

export default connect(mapStateToProps, {fetchMovie, setLoading})(Movie);
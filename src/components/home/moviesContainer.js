import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from './movieCard';
import Netflix from '../../SVGs/netflix/netflix'

class MoviesContainer extends Component {
    render() {
        const {movies} = this.props;
        let content = '';
        content = movies.Response === "True" ? (
            movies.Search.map((movie, index) => <MovieCard key={index} movie={movie} />)
            ) : <Netflix/>;
            
        return (
                <div className = "row" style={{margin:'auto', display:'block'}}>
                    <div className="col s10 m10 l10 xl10 offset-s1 offset-m1 offset-l1 offset-xl1">
                    {content}
                    </div>
                </div>
        )
    }
}

const mapStateToProps = (state) => ({
    movies : state.movies.movies
})

export default connect(mapStateToProps)(MoviesContainer);
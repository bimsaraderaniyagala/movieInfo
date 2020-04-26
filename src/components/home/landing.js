import React, { Component } from 'react'
import SearchForm from './searchForm'
import { connect } from 'react-redux';
import Spinner from './spinner';
import MoviesContainer from './moviesContainer';
import About from './about'

class Landing extends Component {
    render() {
        const { loading } = this.props;
        return (
            <div className="searchBar center">
                <SearchForm />
                <About />
                {loading ? <Spinner /> : <MoviesContainer />}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    loading : state.movies.loading
})

export default connect(mapStateToProps)(Landing)
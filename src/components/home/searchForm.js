import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchMovie, fetchmovies, setLoading } from '../../actions/searchActions';
import '../../../src/App.css'

class SearchForm extends Component {
    
    handleChange = (e) => {
        this.props.searchMovie(e.target.value);
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.fetchmovies(this.props.text);
        this.props.setLoading();
    }
    render(){
        return (
            <form className="container flow-text" onSubmit={this.handleSubmit} style={{marginTop:'30px'}}>
                <div className="input-field row">
                    <label htmlFor="search">search here</label>
                    <input type="text" className="white-text center col s7 m8 l9" onChange={this.handleChange}/>
                    <button className="red accent-4 btn-large col s4 m3 l2 offset-s1 offset-l1 offset-m1" onSubmit={this.handleSubmit}>SEARCH</button>
                </div>
            </form>
        )
    }    
}

const mapStateToProps = (state) => ({
        text: state.movies.text
})

export default connect(mapStateToProps, {searchMovie, fetchmovies, setLoading})(SearchForm); 
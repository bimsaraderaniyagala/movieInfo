import React, { Component } from 'react'

class Footer extends Component{
    render(){
        return(
            <footer className="page-footer grey darken-3">
                <div className="container">
                    <div className="row">
                        <h5 className="white-text">MovieInfo</h5>
                        <p className="grey-text text-lighten-4">developed by Bimsara Deraniyagala | using Reactjs, Reduxjs and integrated with external movies data API <a href="http://www.omdbapi.com/" rel="noopener noreferrer" target="_blank">OMDB</a></p>
                    </div>
                </div>
                <div className="footer-copyright grey darken-4">
                    <div className="container">
                        © 2020 All rights reserved.
                        <a className="grey-text text-lighten-6 right" href="/">contact us</a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer



import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s12 m12 l12">
                    <div className="card grey darken-4">
                        <div className="card-content white-text" style={{marginLeft:'7%', marginRight:'7%', margin:'center', display:'block'}}>
                        <span className="card-title">NETFLIX</span>
                        <p className="grey-text">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
                        <p className="grey-text">You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
                        </div>
                        <div className="card-action red accent-4 white-text center">
                        <a href="https://www.netflix.com/" target="_blank" rel="noopener noreferrer"  style={{marginLeft:'7%', marginRight:'7%'}}>TRY IT NOW</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

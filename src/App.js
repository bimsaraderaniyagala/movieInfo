import React from 'react';
import Navebar from './components/layout/navbar';
import './App.css';
import Footer from './components/layout/footer';
import Landing from './components/home/landing';
import { Provider } from 'react-redux';
import Card from './components/home/netflixCard';
import store from './Store';
import { HashRouter, Route} from 'react-router-dom';
import Movie from './components/home/movie';

function App() {
  return (
    <HashRouter>
    <div className="App">
      <Provider store={store}>
        <div>
          <Navebar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/movie/:id" component={Movie} />
          <Card />
          <Footer />
        </div>
      </Provider>
    </div>
    </HashRouter>
  );
}

export default App;

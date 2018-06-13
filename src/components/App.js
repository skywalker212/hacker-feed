import React, { Component } from 'react';
import {connect} from 'react-redux';
import HackerList from './HackerList';
import Header from './Header';
import {setStories} from '../actions/pages';
import Navigation from './Navigation';
import '../styles/main.css';

export class App extends Component {
  componentDidMount(){
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(result=>result.json())
        .then(data=>{
            this.props.setStories(data);
        });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Navigation />
        <HackerList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  //function for future use
});

const mapDispatchToProps = (dispatch) => ({
  setStories: (stories) => dispatch(setStories(stories))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);

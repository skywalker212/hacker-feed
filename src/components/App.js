import React, { Component } from 'react';
import {connect} from 'react-redux';
import HackerList from './HackerList';
import Header from './Header';
import {setPages, setStories} from '../actions/pages';
import '../styles/main.css';

class App extends Component {
  componentDidMount(){
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(result=>result.json())
        .then(data=>{
            this.props.setStories(data);
            this.props.setPages(Math.ceil(data.length/10));
        });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <HackerList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  //function for future use
});

const mapDispatchToProps = (dispatch) => ({
  setPages: (pages) => dispatch(setPages(pages)),
  setStories: (stories) => dispatch(setStories(stories))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);

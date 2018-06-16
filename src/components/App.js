import React, { Component } from 'react';
import {connect} from 'react-redux';
import HackerList from './HackerList';
import Header from './Header';
import {setStories,changeLoading} from '../actions/pages';
import Navigation from './Navigation';
import Footer from './Footer';
import '../styles/fonts.css';
import '../styles/main.css';
import '../styles/materialize.min.css'

export class App extends Component {
  componentDidMount(){
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(result=>result.json())
        .then(data=>{
            this.props.setStories(data,'top');
            this.props.changeLoading(false);
        });
  }
  render() {
    return (
      <div className="App container">
        <Header />
        <Navigation />
        <HackerList />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  //function for future use
});

const mapDispatchToProps = (dispatch) => ({
  setStories: (stories,type) => dispatch(setStories(stories,type)),
  changeLoading: (type) => dispatch(changeLoading(type))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);

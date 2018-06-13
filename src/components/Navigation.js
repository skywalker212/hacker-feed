import React from 'react';
import {connect} from 'react-redux';
import {setStories} from '../actions/pages';
import changeStories from '../actions/changeResults';

export class Navigation extends React.Component{
    setTop = () => {
        changeStories(this.props.setStories,'top');
    }
    setBest = () => {
        changeStories(this.props.setStories,'best');
    }
    setNew = () => {
        changeStories(this.props.setStories,'new');
    }
    render(){
        return (
            <div>
                <button onClick={this.setTop}>Top Stories</button>
                <button onClick={this.setBest}>Best Stories</button>
                <button onClick={this.setNew}>New Stories</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    //maybe it'll be useful in future
});

const mapDispatchToProps = (dispatch)=>({
    setStories: (stories) => dispatch(setStories(stories))
});

export default connect(mapStateToProps,mapDispatchToProps)(Navigation);
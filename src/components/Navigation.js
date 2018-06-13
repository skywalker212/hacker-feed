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
    render= () =>  (<div className="center-align navigation">
                <button className="waves-effect waves-light btn-small z-depth-3" onClick={this.setTop}>Top Stories</button>
                <button className="waves-effect waves-light btn-small z-depth-2" onClick={this.setBest}>Best Stories</button>
                <button className="waves-effect waves-light btn-small z-depth-3" onClick={this.setNew}>New Stories</button>
            </div>);
}

const mapStateToProps = (state) => ({
    curr: state.curr
});

const mapDispatchToProps = (dispatch)=>({
    setStories: (stories,type) => dispatch(setStories(stories,type))
});

export default connect(mapStateToProps,mapDispatchToProps)(Navigation);
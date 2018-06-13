import React from 'react';
import {connect} from 'react-redux';
import Story from './Story';
import {nextPage, prevPage, jumpToPage} from '../actions/pages';

class HackerList extends React.Component{
    filterStories(){
        return this.props.stories
                .filter((data,index)=>index>=this.props.page*10 && index<this.props.page*10+10)
                .map(data=><Story key={data} id={data} />);
    }

    render(){
        return (
            <div>
                {this.props.stories && this.filterStories()}
                {this.props.pages>0 && <div>
                    <button disabled={this.props.page===0} onClick={this.props.prevPage}>Previous Page</button>
                    <button disabled={this.props.page===this.props.pages} onClick={this.props.nextPage}>NextPage</button>
                </div>}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({page: state.page,pages: state.pages,stories: state.stories});
const mapDispatchToProps = (dispatch) => ({
    nextPage: () => dispatch(nextPage()),
    prevPage: () => dispatch(prevPage()),
    jumpToPage: (page) => dispatch(jumpToPage(page)),
});

export default connect(mapStateToProps,mapDispatchToProps)(HackerList);
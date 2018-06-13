import React from 'react';
import {connect} from 'react-redux';
import Story from './Story';
import {nextPage, prevPage, jumpToPage,setError} from '../actions/pages';

class HackerList extends React.Component{
    filterStories(){
        return this.props.stories
                .filter((data,index)=>index>=(this.props.page-1)*10 && index<(this.props.page-1)*10+10)
                .map(data=><Story key={data} id={data} />);
    }
    jumpTo = (event) => {
        const pageNo = event.target.value;
        if(!pageNo) this.props.setError(true);
        else if(pageNo>=1 && pageNo<=this.props.pages){
            this.props.jumpToPage(pageNo);
            this.props.setError(false);
        }
    }
    render(){
        return (
            <div>
                {this.props.error && <p>Please set a value for page</p>}
                {this.props.stories.length===0 && <p>Please wait...</p>}
                <h6 className='center-align' style={{margin:'20px 0'}}>{this.props.curr} stories</h6>
                {this.props.stories && this.filterStories()}
                {this.props.pages>0 && <div className="center-align">
                    <p>Showing page {this.props.page} of {this.props.pages}</p>
                    <button className="prev-btn black-text waves-effect waves-light btn-small yellow accent-2" disabled={this.props.page===1} onClick={this.props.prevPage}>Previous Page</button>
                    {/*<input type='text' onChange={this.jumpTo} value={this.props.page} />*/}
                    <button className="next-btn black-text waves-effect waves-light btn-small red accent-2" disabled={this.props.page===this.props.pages} onClick={this.props.nextPage}>NextPage</button>
                </div>}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({page: state.page,pages: state.pages,stories: state.stories,error: state.error,curr:state.curr});
const mapDispatchToProps = (dispatch) => ({
    nextPage: () => dispatch(nextPage()),
    prevPage: () => dispatch(prevPage()),
    jumpToPage: (page) => dispatch(jumpToPage(page)),
    setError: (err) => dispatch(setError(err))
});

export default connect(mapStateToProps,mapDispatchToProps)(HackerList);
import React from 'react';
import moment from 'moment';
import _ from 'lodash';

export default class Story extends React.Component{
    constructor(){
        super();
        this.state={
            displayText: false,
            fetched: false,
            askhn:false
        }
    }
    componentDidMount(){
        this._isMounted=true;
        fetch('https://hacker-news.firebaseio.com/v0/item/'+this.props.id+'.json')
        .then(res=>res.json())
        .then(data=>{
            if(this._isMounted){
                this.setState((state)=>{
                    return {
                        state,
                        fetched: data?true:false,
                        askhn: data?_.includes(data.title,"Ask HN"):false,
                        ...data
                    }
                });
            }
        }).catch(err=>{
            if(this._isMounted){
                this.setState({
                    title: err
                });
            }
        });
    }

    componentWillUnmount(){
        this._isMounted=false;
    }

    changeDisplayState = () =>{
        this.setState((state)=>{
            return {
                displayText: !state.displayText
            };
        });
    }

    render(){
        return (
            <div>
                {
                    this.state.fetched && <div className={`story card ${this.state.askhn?'indigo':'blue-grey'} darken-1 z-depth-1`}>
                    <div className="card-content white-text">
                        {this.state.title && 
                        <div>
                            <a href={this.state.url} className="card-title light-green-text text-accent-3" target="_blank" style={{display:'inline'}}>{this.state.title}</a>
                            <p style={{display:'inline',marginLeft:'10px'}}>by {this.state.by}</p>
                        </div>}
                        <div>
                            {this.state.time && <div>Posted on: {moment.unix(this.state.time).format('MMM Do, YY')}</div>}
                            {
                                <div className={'score-text'}>
                                    {this.state.score && <p className='d-inline'>Score: {this.state.score}</p>}
                                    {this.state.text && 
                                        <div className='d-inline'>
                                            <button className="waves-effect waves-light btn-small my-btn" onClick={this.changeDisplayState}>{this.state.displayText?'Hide':'Show'} Text</button>
                                            {this.state.displayText && <p className='p-text' dangerouslySetInnerHTML={{__html: _.unescape(this.state.text)}}/>}
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                </div>
                }
            </div>
        );
    }
}
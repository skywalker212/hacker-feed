import React from 'react';
import moment from 'moment';

export default class Story extends React.Component{
    constructor(){
        super();
        this.state={
            displayText: false
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
            <div className="story">
                {this.state.title && 
                <div>
                    <a href={this.state.url} target="_blank">{this.state.title}</a>
                    <p>by {this.state.by}</p>
                </div>}
                <div>
                    {this.state.time && <div>Posted at: {moment.unix(this.state.time).format('MMM Do, YY')}</div>}
                    {this.state.score && <p>Score: {this.state.score}</p>}
                </div>
                {this.state.text && 
                <div>
                    <button onClick={this.changeDisplayState}>{this.state.displayText?'Hide':'Show'} Text</button>
                    {this.state.displayText && <p>{this.state.text}</p>}
                </div>
                }
            </div>
        );
    }
}
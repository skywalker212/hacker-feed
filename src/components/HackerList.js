import React from 'react';

export default class HackerList extends React.Component{
    render(){
        return (
            <ul>
            <li>one</li>
            <li>two</li>
            </ul>
        );
    }

    makerequest(){
        return fetch();
    }
}
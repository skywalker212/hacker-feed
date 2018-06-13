import React from 'react';

const Header = (props)=>{
    return (
        <div className="center-align">
            <h1 className="App-title">HackerFeed</h1>
            <h5 className="App-desc">Your own HackerNews feed</h5>
            <h6>click on the title to open link</h6>
        </div>
    );
};

export default Header;
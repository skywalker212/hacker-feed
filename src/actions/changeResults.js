const changeStories = (callback,type) => {
    fetch('https://hacker-news.firebaseio.com/v0/' +type +'stories.json')
        .then(result=>result.json())
        .then(data=>{
            callback(data);
        });
}

export default changeStories;
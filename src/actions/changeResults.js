const changeStories = (callback1,callback2,type) => {
    fetch('https://hacker-news.firebaseio.com/v0/' +type +'stories.json')
        .then(result=>result.json())
        .then(data=>{
            callback1(data,type);
            callback2(false);
        });
}

export default changeStories;
export const nextPage = ()=>({
    type: 'NEXT_PAGE',
});

export const prevPage = ()=>({
    type:'PREV_PAGE'
});

export const jumpToPage = (page)=>({
    type:'JUMP_TO_PAGE',
});

export const setStories = (stories)=>({
    type: 'SET_STORIES',
    stories,
    page: 1,
    pages: Math.ceil(stories.length/10)
});

export const setError = (err) => ({
    type: 'SET_ERROR',
    error: err
});
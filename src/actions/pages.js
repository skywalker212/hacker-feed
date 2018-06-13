export const nextPage = ()=>({
    type: 'NEXT_PAGE',
});

export const prevPage = ()=>({
    type:'PREV_PAGE'
});

export const jumpToPage = (page)=>({
    type:'JUMP_TO_PAGE',
    page
});

export const setPages = (pages)=>({
    type:'SET_PAGES',
    pages
});

export const setStories = (stories)=>({
    type: 'SET_STORIES',
    stories
});
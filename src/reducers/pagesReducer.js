const defaultPageState = {
    page: 0,
    pages: 0,
    stories: []
};

const pagesReducer = (state=defaultPageState,action)=>{
    switch(action.type){
        case 'NEXT_PAGE':
            return {
                ...state,
                page: state.page<state.pages?state.page+1:state.pages
            };
        case 'PREV_PAGE':
            return {
                ...state,
                page: state.page>0?state.page-1:0
            };
        case 'JUMP_TO_PAGE':
            return {
                ...state,
                page: action.page
            };
        case 'SET_PAGES':
            return {
                ...state,
                pages: action.pages
            }
        case 'SET_STORIES':
            return {
                ...state,
                stories: action.stories
            }
        default:
            return state;
    }
}

export default pagesReducer;
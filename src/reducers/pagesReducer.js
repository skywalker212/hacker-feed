const defaultPageState = {
    page: 1,
    pages: 1,
    stories: [],
    error: false,
    curr: 'top',
    loading: true
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
                page: state.page>1?state.page-1:1
            };
        case 'JUMP_TO_PAGE':
            return {
                ...state,
                page: action.page
            };
        case 'SET_STORIES':
            return {
                ...state,
                stories: action.stories,
                page: action.page,
                pages: action.pages,
                curr: action.curr
            }
        case 'SET_ERROR':
            return {
                ...state,
                error: state.error
            }
        case 'CHANGE_LOADING':
            return {
                ...state,
                loading: action.loading
            }
        default:
            return state;
    }
}

export default pagesReducer;
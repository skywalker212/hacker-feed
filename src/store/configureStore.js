import {createStore} from 'redux';
import pagesReducer from '../reducers/pagesReducer';

export default () => {
    const store = createStore(
    pagesReducer
    ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;
}
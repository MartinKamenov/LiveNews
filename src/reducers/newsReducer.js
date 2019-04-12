import * as types from '../actions/actionTypes';

export default function newsReducer(state = [], action) {
    switch (action.type) {
    case types.GET_NEWS_SUCCESS:
        return action.news;
    default:
        return state;
    }
}
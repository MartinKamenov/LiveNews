import * as types from './actionTypes';
import apiService from '../services/api-service';

export function getGithubProfileSuccess(profile) {
    return { type: types.GET_GITHUB_PROFILE_SUCCESS, profile };
}


export function getNews(type, keywords) {
    return async function(dispatch) {
        const query = `?q=${keywords}`;
        const res = await apiService.getAllNews(type, query);
        const news = res.data;
        return dispatch(getNewsSuccess(news));
    };
}

export function getNewsSuccess(news) {
    return { type: types.GET_NEWS_SUCCESS, news };
}
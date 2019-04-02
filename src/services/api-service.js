import fetch from 'isomorphic-fetch';
const newsUrl = 'https://fullcontrol-api.herokuapp.com/news';

const apiService = {
    getAllNews: async function() {
        const news = await fetch(newsUrl);
        return news;
    }
};

export default apiService;
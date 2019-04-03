const newsUrl = 'https://fullcontrol-api.herokuapp.com/news';
const sportPath = '/sport';

const apiService = {
    getAllSportNews: function() {
        return fetch(newsUrl + sportPath);
    }
};

export default apiService;
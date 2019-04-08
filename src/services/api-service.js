const newsUrl = 'https://fullcontrol-api.herokuapp.com/news';
const sportPath = '/sport';
const newsPath = '/';

const apiService = {
    getAllNews: function(type, query) {
        let url = newsUrl;
        switch(type) {
        case 'any':
            url += newsPath + query;
            break;
        case 'sport':
            url += sportPath;
            break;
        }

        return fetch(url);
    }
};

export default apiService;
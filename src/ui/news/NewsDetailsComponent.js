import React from 'react';
import PropTypes from 'prop-types';
import { Text, Image, View } from 'react-native';

const NewsDetailsComponent = ({ news, handlePress }) => (
    <View>
        <Image 
            style={{width: 66, height: 58}}
            source={{uri: news.urlToImage}}/>
        <Text onPress={() => handlePress(news.title)}>{news.title}</Text>
    </View>
);

NewsDetailsComponent.propTypes = {
    news: PropTypes.shape({
        author: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        urlToImage: PropTypes.string.isRequired
    })
};
 
export default NewsDetailsComponent;
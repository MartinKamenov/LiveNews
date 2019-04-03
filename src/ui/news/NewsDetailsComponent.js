import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

const NewsDetailsComponent = ({ news, handlePress }) => (
    <Text onPress={() => handlePress(news.title)}>{news.title}</Text>
);

NewsDetailsComponent.propTypes = {
    news: PropTypes.shape({
        author: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })
};
 
export default NewsDetailsComponent;
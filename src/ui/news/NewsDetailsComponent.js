import React from 'react';
import PropTypes from 'prop-types';
import { Text, Image, View, StyleSheet } from 'react-native';

const NewsDetailsComponent = ({ news, handlePress }) => (
    <View style={styles.container}>
        <Image 
            style={{width: '50%', height: 50, justifyContent: 'center'}}
            source={{uri: news.urlToImage}}/>
        <Text
            style={styles.title}
            onPress={() => handlePress(news.url)}>{news.title}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        //width: '75%'
    }
});

NewsDetailsComponent.propTypes = {
    news: PropTypes.shape({
        author: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        urlToImage: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    })
};
 
export default NewsDetailsComponent;
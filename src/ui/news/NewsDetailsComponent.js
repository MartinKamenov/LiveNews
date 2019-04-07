import React from 'react';
import PropTypes from 'prop-types';
import { Text, Image, View, StyleSheet, TouchableHighlight } from 'react-native';

const NewsDetailsComponent = ({ news, handlePress }) => (
    <View style={styles.wrapper}>
        <TouchableHighlight
            style={styles.touchableContainer}
            onPress={() => handlePress(news.url)}>
            <View style={styles.container}>
                <Image 
                    style={{width: '50%', height: 50, justifyContent: 'center'}}
                    source={{uri: news.urlToImage}}/>
                <Text
                    style={styles.title}>
                    {news.title}
                </Text>
            </View>
        </TouchableHighlight>
    </View>
);

const styles = StyleSheet.create({
    wrapper: {
        height: 200
    },
    touchableContainer: {
        width: '100%',
        height: 200
    },
    container: {
        height: 200,
        width: '100%',
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        width: 200,
        textAlign: 'center',
        fontWeight: 'bold'
    }
});

NewsDetailsComponent.propTypes = {
    news: PropTypes.shape({
        author: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        urlToImage: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    }),
    handlePress: PropTypes.func.isRequired
};
 
export default NewsDetailsComponent;
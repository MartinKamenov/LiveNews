import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import NewsDetailsComponent from './NewsDetailsComponent';

const NewsRowComponent = ({ newsRow, handlePress }) => {
    return (
        <View style={styles.row}>
            {newsRow.map((singleNews, i) => {
                return (
                    <NewsDetailsComponent key={i}
                        news={singleNews}
                        handlePress={handlePress}/>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        height: 200
    }
});

NewsRowComponent.propTypes = {
    newsRow: PropTypes.array.isRequired,
    handlePress: PropTypes.func.isRequired
};
 
export default NewsRowComponent;
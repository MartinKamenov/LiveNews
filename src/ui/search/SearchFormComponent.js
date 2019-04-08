import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const SearchFormComponent = ({ handleChangeSearchInput, handleSearch }) => {
    return (
        <View>
            <TextInput
                onChangeText={(text) => handleChangeSearchInput(text)}
                placeholder='Keywords'
                style={styles.searchInput}/>
            <Button
                style={styles.searchButton}
                title='search'
                onPress={handleSearch}/>
        </View>
    );
}

const styles = StyleSheet.create({
    searchInput: {
        backgroundColor: '#ffffff',
        height: 40,
        fontSize: 16
    },
    searchButton: {
        backgroundColor: '#000000',
        color: '#ffffff',
        height: 50
    }
});

SearchFormComponent.propTypes = {
    handleChangeSearchInput: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired
};
 
export default SearchFormComponent;
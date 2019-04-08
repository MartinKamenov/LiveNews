import React from 'react';
import { View, TextInput, Button } from 'react-native';
import PropTypes from 'prop-types';

const SearchFormComponent = ({ handleChangeSearchInput, handleSearch }) => {
    return (
        <View>
            <TextInput
                onChangeText={(text) => handleChangeSearchInput(text)}
                placeholder='Keywords'
                style={{backgroundColor: '#ffffff'}}/>
            <Button title='search' onPress={handleSearch}/>
        </View>
    );
}

SearchFormComponent.propTypes = {
    handleChangeSearchInput: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired
};
 
export default SearchFormComponent;
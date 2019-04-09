import React, { Component } from 'react';
import SearchFormComponent from '../search/SearchFormComponent';
import NewsTypesRowComponent from './NewsTypesRowComponent';
import { Text, ImageBackground , View, StyleSheet, TouchableHighlight  } from 'react-native';
import PropTypes from 'prop-types';
import types from '../../enums/types';
import constants from '../../constants/constants';

class NewsAppComponent extends Component {
    static navigationOptions = {
        title: 'LiveNews',
        headerTitleStyle: {
            color: '#ffffff'
        },
        headerStyle: {
            backgroundColor: '#000000'
        }
    };

    state = {
        searchText: ''
    }

    handleChangeSearchInput = (text) => {
        this.setState({searchText: text});
    }
    handleSearch = () => {
        const searchText = this.state.searchText;
        const { navigate } = this.props.navigation;
        navigate('NewsComponent', { type: 'any', searchText });
    }
    handleSelectionOfType = (selectedType) => {
        const { navigate } = this.props.navigation;
        navigate('NewsComponent', { type: selectedType });
    }

    getImageSourceFromType = (type) => {
        switch(type) {
        case 'any':
            return require('../../../assets/news_carousel.jpg');
        case 'sport':
            return require('../../../assets/sport_carousel.jpg');
        }
    }
    render() {
        let copyOfTypes = types.slice();
        let allRows = [];
        while (copyOfTypes.length > 0) {
            chunk = copyOfTypes.splice(0, constants.typesOnRow);
            allRows.push(chunk);
        }

        return (
            <ImageBackground 
                style={styles.containerBackground}
                source={require('../../../assets/news_background.jpg')}>
                <SearchFormComponent
                    handleSearch={this.handleSearch}
                    handleChangeSearchInput={this.handleChangeSearchInput}/>

                <View>
                    {
                        allRows.map((rowTypes, i) => (
                            <NewsTypesRowComponent 
                                key={i}
                                rowTypes={rowTypes}
                                handleSelectionOfType={this.handleSelectionOfType}
                                getImageSourceFromType={this.getImageSourceFromType}/>)
                        )
                    }
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    containerBackground: {
        width: '100%',
        height: '100%'
    }
});

NewsAppComponent.propTypes = {
    navigation: PropTypes.object.isRequired
};
 
export default NewsAppComponent;
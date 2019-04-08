import React, { Component } from 'react';
import SearchFormComponent from './search/SearchFormComponent';
import { Text, ImageBackground , View, StyleSheet, TouchableHighlight  } from 'react-native';
import PropTypes from 'prop-types';
import types from '../enums/types';

class NewsAppComponent extends Component {
    static navigationOptions = {
        title: 'NewsApp',
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
            return require('../../assets/news_carousel.jpg');
        case 'sport':
            return require('../../assets/sport_carousel.jpg');
        }
    }
    render() {
        return (
            <ImageBackground 
                    style={styles.containerBackground}
                    source={require('../../assets/news_background.jpg')}>
                <SearchFormComponent
                    handleSearch={this.handleSearch}
                    handleChangeSearchInput={this.handleChangeSearchInput}/>

                <View
                    style={styles.row}>
                    {types.map((type, i) => { 
                        return (
                            <TouchableHighlight
                                style={styles.inputWrap}
                                key={i}
                                onPress={() => this.handleSelectionOfType(type)}>
                                <View>
                                    <ImageBackground 
                                        style={styles.carouselImage}
                                        source={this.getImageSourceFromType(type)}
                                        imageStyle={styles.carouselImageStyle}>
                                        <View style={styles.textContainet}>
                                            <Text style={styles.typeText}>{type.toUpperCase()}</Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                                
                            </TouchableHighlight>
                        );}
                    )}
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    containerBackground: {
        width: '100%',
        height: '100%'
    },
    carouselImage: {
        width: '100%',
        height: 200
    },
    carouselImageStyle: {
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 50
    },
    typeText: {
        color: '#0cff89',
        fontWeight: 'bold',
        backgroundColor: '#000000aa',
        padding: 5
    },
    textContainet: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        height: 200
    },
    inputWrap: {
        flex: 1,
        marginBottom: 10,
        width: '50%',
        height: 200
    }
});

NewsAppComponent.propTypes = {
    navigation: PropTypes.object.isRequired
};
 
export default NewsAppComponent;
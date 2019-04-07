import React, { Component } from 'react';
import NewsComponent from './news/NewsComponent';
import { Text, ImageBackground , View, StyleSheet, TouchableHighlight  } from 'react-native';
import PropTypes from 'prop-types';
import types from '../enums/types';

class NewsAppComponent extends Component {

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
            <View style={styles.row}>
                {types.map((type, i) => { 
                    return (
                        <TouchableHighlight
                            style={styles.inputWrap}
                            key={i}
                            onPress={() => this.handleSelectionOfType(type)}>
                            <View>
                                <ImageBackground 
                                    style={styles.carouselImage}
                                    source={this.getImageSourceFromType(type)}>
                                    <View style={styles.textContainet}>
                                        <Text style={styles.typeText}>{type.toUpperCase()}</Text>
                                    </View>
                                </ImageBackground>
                            </View>
                            
                        </TouchableHighlight>
                    );}
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    carouselImage: {
        width: '100%',
        height: 200
    },
    typeText: {
        color: '#db0d70',
        fontWeight: 'bold'
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
        flexDirection: 'row'
    },
    inputWrap: {
        flex: 1,
        borderColor: '#000000',
        borderBottomWidth: 1,
        marginBottom: 10,
        width: '50%'
    }
});

NewsAppComponent.propTypes = {
    navigation: PropTypes.object.isRequired
};
 
export default NewsAppComponent;
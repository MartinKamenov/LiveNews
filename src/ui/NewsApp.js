import React, { Component } from 'react';
import NewsComponent from './news/NewsComponent';
import { Text, ImageBackground , View, StyleSheet, TouchableHighlight  } from 'react-native';
import types from '../enums/types';

class NewsAppComponent extends Component {
    state = {
        selectedType: null
    }

    handleSelectionOfType = (selectedType) => {
        this.setState({selectedType});
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
        if(!this.state.selectedType) {
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

        switch(this.state.selectedType) {
        case 'any':
        case 'sport':
            return <NewsComponent/>;
        }
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
 
export default NewsAppComponent;
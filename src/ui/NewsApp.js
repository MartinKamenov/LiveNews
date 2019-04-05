import React, { Component } from 'react';
import NewsComponent from './news/NewsComponent';
import { Text, Image, View, StyleSheet, TouchableHighlight  } from 'react-native';

class NewsAppComponent extends Component {
    state = {
        selectedType: null
    }

    handleSelectionOfType = (selectedType) => {
        this.setState({selectedType});
    }
    render() {
        if(!this.state.selectedType) {
            return (
                <View>
                    <TouchableHighlight onPress={() => this.handleSelectionOfType('any')}>
                        <Image
                            style={styles.carouselImage}
                            source={require('../../assets/news_carousel.jpg')}/>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.handleSelectionOfType('sport')}>
                        <Image
                            style={styles.carouselImage}
                            source={require('../../assets/sport_carousel.jpg')}/>
                    </TouchableHighlight>
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
        width: '50%',
        height: 100
    }
});
 
export default NewsAppComponent;
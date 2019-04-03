import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView,
    ProgressBarAndroid, ToastAndroid } from 'react-native';
import NewsDetailsComponent from './NewsDetailsComponent';
import apiService from '../../services/api-service';

class NewsComponent extends Component {
    state = {
        isLoading: true,
        news: []
    };

    handlePress(newsTitle) {
        ToastAndroid.show(newsTitle, ToastAndroid.SHORT);
    }
    componentDidMount() {
        return apiService.getAllSportNews()
            .then((response) => response.json())
            .then((news) => {
                this.setState({news, isLoading: false});
            })
            .catch((error) =>{
                console.error(error);
            });
    }
    render() { 
        if(this.state.isLoading) {
            return (
              <View style={styles.container}>
                <ProgressBarAndroid/>
                <Text>Fetching news</Text>
              </View>
            );
        }

        return (
            <View style={styles.container}>
                <Text>Sport news</Text>
                <ScrollView>
                    {this.state.news.map((singleNews, i) => (
                        <NewsDetailsComponent key={i}
                            news={singleNews}
                            handlePress={this.handlePress}/>
                    ))}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
});
 
export default NewsComponent;
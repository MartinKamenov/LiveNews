import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView,
    ProgressBarAndroid, ToastAndroid, Linking } from 'react-native';
import NewsDetailsComponent from './NewsDetailsComponent';
import apiService from '../../services/api-service';
import PropTypes from 'prop-types';
import constants from '../../constants/constants';

class NewsComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        const type = navigation.getParam('type', 'any');
        const searchText = navigation.getParam('searchText', '');

        let title = type.charAt(0).toUpperCase() + type.slice(1);
        if(searchText) {
            title = 'Search for ' + searchText;
        }
        return {
            title,
            headerTitleStyle: {
                color: '#ffffff'
            },
            headerStyle: {
                backgroundColor: '#000000'
            },
            headerTintColor: '#ffffff'
        };
    };
    state = {
        isLoading: true,
        news: []
    };

    handlePress(url) {
        ToastAndroid.show(url, ToastAndroid.SHORT);
        Linking.openURL(url);
    }
    componentDidMount() {
        const { navigation } = this.props;
        const type = navigation.getParam('type', 'any');
        const searchText = navigation.getParam('searchText', '');
        let query = '';
        if(searchText) {
            query += `?q=${searchText}`;
        }
        return apiService.getAllNews(type, query)
            .then((response) => response.json())
            .then((news) => {
                this.setState({news, isLoading: false});
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() { 
        if(this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ProgressBarAndroid/>
                    <Text style={{ color: '#fff' }}>Fetching news</Text>
                </View>
            );
        }

        let news = this.state.news;
        let twoByTwoNews = [];
        while (news.length > 0) {
            chunk = news.splice(0, constants.newsOnRow);
            twoByTwoNews.push(chunk);
        }

        news = twoByTwoNews;

        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.scrollContainer}>
                        {news.map((twoNews, i) => {
                            return (<View style={styles.row} key={i}>
                                {twoNews.map((singleNews, j) => {
                                    return (
                                        <NewsDetailsComponent key={i * constants.newsOnRow + j}
                                            news={singleNews}
                                            handlePress={this.handlePress}/>
                                    );
                                })}
                            </View>)
                        }
                        )}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollContainer: {
        marginTop: 50
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        height: 200
    }
});

NewsComponent.propTypes = {
    navigation: PropTypes.object.isRequired
};
 
export default NewsComponent;
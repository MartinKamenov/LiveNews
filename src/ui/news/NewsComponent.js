import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView,
    ProgressBarAndroid, Linking } from 'react-native';
import NewsRowComponent from './NewsRowComponent';
import apiService from '../../services/api-service';
import PropTypes from 'prop-types';
import constants from '../../constants/constants';
import Toast from 'react-native-easy-toast';
const toastDuration = 1000;

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

    handlePress = (url) => {
        this.refs.toast.show(url, toastDuration);
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

        let news = this.state.news.slice();
        let allRows = [];
        while (news.length > 0) {
            chunk = news.splice(0, constants.newsOnRow);
            allRows.push(chunk);
        }

        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.scrollContainer}>
                        {
                            allRows.map((newsRow, i) => {
                                return (
                                    <NewsRowComponent 
                                        key={i}
                                        newsRow={newsRow}
                                        handlePress={this.handlePress}/>
                                );
                            })
                        }
                    </View>
                </ScrollView>
                <Toast
                    style={styles.toast}
                    textStyle={{color: 'black'}}
                    ref="toast"/>
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
    toast: {
        position: 'absolute',
        bottom:0,
        backgroundColor: 'grey',
        width: '80%'
    }
});

NewsComponent.propTypes = {
    navigation: PropTypes.object.isRequired
};
 
export default NewsComponent;
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView,
    ProgressBarAndroid, ToastAndroid, Linking } from 'react-native';
import NewsDetailsComponent from './NewsDetailsComponent';
import apiService from '../../services/api-service';
import PropTypes from 'prop-types';

class NewsComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        const type = navigation.getParam('type', 'any');
        const title = type.charAt(0).toUpperCase() + type.slice(1);
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
        return apiService.getAllNews(type)
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
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

NewsComponent.propTypes = {
    navigation: PropTypes.object.isRequired
};
 
export default NewsComponent;
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
// import apiService from './src/services/api-service';

export default class App extends React.Component {
  state = {
    news: []
  };
  componentDidMount() {
    return fetch('https://fullcontrol-api.herokuapp.com/news/sport')
      .then((response) => response.json())
      .then((news) => {

        this.setState({
          news,
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>News</Text>
        <ScrollView>
          {this.state.news.map((singleNews, i) => (
            <Text key={i}>{singleNews.title}</Text>
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
  },
});

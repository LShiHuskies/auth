import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
        apiKey: "AIzaSyDhyplVF90XTHBF_-WPMbYTY0JoNP5FumM",
        authDomain: "authentication-117f6.firebaseapp.com",
        databaseURL: "https://authentication-117f6.firebaseio.com",
        projectId: "authentication-117f6",
        storageBucket: "authentication-117f6.appspot.com",
        messagingSenderId: "763277430974"
      });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>
          An App
        </Text>
        <LoginForm />
      </View>
    )
  }
};

export default App;
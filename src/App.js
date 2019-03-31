import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = {
    loggedIn: false,
  }
  componentWillMount() {
    firebase.initializeApp({
        apiKey: "AIzaSyDhyplVF90XTHBF_-WPMbYTY0JoNP5FumM",
        authDomain: "authentication-117f6.firebaseapp.com",
        databaseURL: "https://authentication-117f6.firebaseio.com",
        projectId: "authentication-117f6",
        storageBucket: "authentication-117f6.appspot.com",
        messagingSenderId: "763277430974"
      });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          loggedIn: true,
        });
      } else {
        this.setState({
          loggedIn: false,
        });
      }
    });
  }

  renderContent = () => {
    if (this.state.loggedIn) {
      return (
        <Button>
          Log Out
        </Button>
      );
    };

    return <LoginForm />;
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <CardSection>
          {this.renderContent()}
        </CardSection>
      </View>
    )
  }
};

export default App;
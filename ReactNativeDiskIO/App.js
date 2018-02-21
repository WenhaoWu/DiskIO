/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  Button
} from 'react-native';

export default class App extends Component<{}> {

  _onBtnPress(){
    try {
      var before = new Date()
      var RNFS = require('react-native-fs');
      var path = RNFS.DocumentDirectoryPath + '/test.txt';

      RNFS.writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8')
        .then((success) => {
          var after = new Date()
          var difference = after - before;
          console.log(difference)
        })
        .catch((err) => {
          console.log(err.message);
        });

      RNFS.readFile(path)
        .then((result) => {
          console.log('GOT RESULT', result);
        })
        .catch((err) => {
          console.log(err.message, err.code);
        });

    } catch (error) {
      // Error saving data
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Button title="Click Me" onPress={this._onBtnPress}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

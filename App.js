/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';


export default class App extends Component {

  
  render() {

    return (

      <View>

        <View style={{margin: 10}}>

          <Button title="Call Another Class Function Without Argument"/>

        </View>

      </View>

    );
  }
}
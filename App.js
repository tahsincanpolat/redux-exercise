import { View ,StyleSheet } from 'react-native';
import React, { Component } from 'react';
import Counter from './src/components/Counter';
import IncreaseCounter from './src/components/IncreaseCounter';
import DecreaseCounter from './src/components/DecreaseCounter';
import IncreaseByTwoCounter from './src/components/IncreaseByTwoCounter';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Counter/>
        <IncreaseCounter/>
        <DecreaseCounter/>
        <IncreaseByTwoCounter/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})

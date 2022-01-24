import { Text, View } from 'react-native';
import React, { Component } from 'react';
import {connect} from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.counter}</Text>
      </View>
    );
  }
}

function mapStateToProps(state){
    return {counter : state.counterReducer}
}

export default connect(mapStateToProps)(Counter);
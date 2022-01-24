import React,{ Component } from "react";
import {TouchableOpacity, View ,Text} from 'react-native';

import { bindActionCreators } from "redux";
import { decreaseCounter } from "../redux/actions/counterActions";

import {connect} from 'react-redux';


class DecreaseCounter extends Component{
    render(){
        return(
            <View>
                <TouchableOpacity
                style={{backgroundColor:'#f0bd6e'}}
                onPress={()=>{
                    this.props.dispatch(decreaseCounter()); // dispatch ile store içine aktarım sağlanır.
                }}
                >
                    <Text style={{fontSize:24}}>-1</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {action:bindActionCreators(decreaseCounter,dispatch)}
}

export default connect(mapDispatchToProps)(DecreaseCounter);
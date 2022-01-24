import React,{ Component } from "react";
import {TouchableOpacity, View ,Text} from 'react-native';

import { bindActionCreators } from "redux";
import { increaseByTwoCounter} from "../redux/actions/counterActions";

import {connect} from 'react-redux';



class IncreaseByTwoCounter extends Component{
    render(){
        return(
            <View>
                <TouchableOpacity
                style={{backgroundColor:'#f0bd6e'}}
                onPress={()=>{
                    this.props.dispatch(increaseByTwoCounter()); // dispatch ile store içine aktarım sağlanır.
                }}
                >
                    <Text style={{fontSize:24}}>+2</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {action:bindActionCreators(increaseByTwoCounter,dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter);
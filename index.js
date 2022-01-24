/**
 * @format
 */
import React,{Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import configureStore from './src/redux/reducers/configureStore';

const store = configureStore();
/*
NRedux fonksiyonumuz App componentini Provider ile sarmalayacak. Componentler arası iletişi sağlamak amacıyla
*/
const RNRedux = () =>(
    <Provider store={store}>
        <App/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);

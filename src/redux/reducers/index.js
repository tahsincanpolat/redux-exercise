import {combineReducers} from 'redux';
import counterReducer from './counterReducer';

/*
burada yapılmak istenen birden fazla reducurlarımız toparlamak
bu nedenle import import {combineReducers} from 'redux'; kütüphanesinden faydalanıyoruz.
*/
const reducers = combineReducers({
    counterReducer,
});

export default reducers;
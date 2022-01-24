import {createStore} from 'redux';
import reducers from './index';

/*
Store işlemi, action ve reducer'ı bir araya getirip yapıyı bağlar.
tüm reducerlarımızı burada store'a bağlıyoruz
*/
export default function configureStore(){
    return createStore(reducers);
}
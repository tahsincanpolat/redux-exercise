import * as actionTypes from '../actions/actionTypes';

const counterReducer = (state=0,action)=>{
    // state yönetim işleri yapılır.
    // Reducer'lar, action sonucunda uygulamanın var olan state'ini değiştirmesini sağlar.
    // Api bağlanma işlemi yapılamaz ?? 
    let newState;
    switch(action.type){
        case actionTypes.INCREASE_COUNTER:
            return (newState=state+action.payload);
        case actionTypes.DECREASE_COUNTER:
            return (newState=state-action.payload);
        case actionTypes.INCREASE_BY_TWO_COUNTER:
            return (newState=state+action.payload);
        default:
            return state;
    }
}

export default counterReducer;
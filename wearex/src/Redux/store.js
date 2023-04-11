import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import { reducer as mensProductReducer } from './MensProduct/reducer'
import {reducer as womensProductReducer } from './WomensProduct/reducer'
import {reducer as cartReducer } from './Cart/reducer'
import {reducer as kidsProductReducer} from './Kids/reducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    mensProductReducer,
    womensProductReducer,
    cartReducer,
    kidsProductReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))
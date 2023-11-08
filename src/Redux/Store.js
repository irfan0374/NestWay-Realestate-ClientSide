import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {persistStore} from 'redux-persist'
import {configureStore} from "@reduxjs/toolkit"
import {combineReducers} from "@reduxjs/toolkit"
import userReducer from './Slice/userSlice'
import partnerReducer from './Slice/partnerSlice'
import adminReducer from './Slice/adminSlice'

const persistConfig={key:"root",storage,version:1}
const reducer=combineReducers({
    userReducer,
    partnerReducer,
    adminReducer,
})
const persistedReducer=persistReducer(persistConfig,reducer)
const store=configureStore({
    reducer:persistedReducer
})
const persistor=persistStore(store)
export {store,persistor}
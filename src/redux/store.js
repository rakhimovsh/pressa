import {combineReducers, configureStore} from '@reduxjs/toolkit'
import auth from './reducers/auth';
import posts from './reducers/posts';


const rootReducer = combineReducers({
  auth, posts
})

export const setupStore = ()=>{
  return configureStore({
    reducer: rootReducer,
  })
}
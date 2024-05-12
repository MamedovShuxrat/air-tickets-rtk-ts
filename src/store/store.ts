import { combineReducers, configureStore } from '@reduxjs/toolkit'
import exampleReducer from './slices/slice'

const rootReducer = combineReducers({
    example: exampleReducer,

})

const store = configureStore({
    reducer: rootReducer,
})
export type RootState = ReturnType<typeof rootReducer>;
export default store 

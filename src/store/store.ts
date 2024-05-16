import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { CompanyReducer, TransferFiltersReducer } from './slices/slice';

const rootReducer = combineReducers({
    Company: CompanyReducer,
    TransferFilters: TransferFiltersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store: ReturnType<typeof configureStore> = configureStore({
    reducer: rootReducer,
});

export default store;
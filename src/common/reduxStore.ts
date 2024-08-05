import { Store } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from  'common/rootReducer';

const store = configureStore({
    reducer: rootReducer,
})

export default store;
export type RootState = ReturnType<typeof store.getState>;


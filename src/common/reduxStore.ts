import {configureStore} from '@reduxjs/toolkit';

import rootReducer from 'common/rootReducer';
import {homeApi} from 'services/api';

const store = configureStore({
  reducer: {rootReducer, [homeApi.reducerPath]: homeApi.reducer},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(homeApi.middleware),
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

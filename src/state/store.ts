import { configureStore, combineReducers, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

import uiReducer from './ui';
import titleReducer from './title';
import menuReducer from './menuState';

const rootReducer = combineReducers({
  ui: uiReducer,
  title: titleReducer,
  menu: menuReducer
});

const store = configureStore({
  reducer: rootReducer,

});

export type RootState = ReturnType<typeof rootReducer>;
export type Dispatch = typeof store.dispatch;
export type Thunk = ThunkAction<void, RootState, null, Action<string>>

export default store;
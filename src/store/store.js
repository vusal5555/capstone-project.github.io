import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// const loggerMiddleware = store => next => action => {
//   if (!action.type) {
//     return next(action)
//   }

//   console.log('type: ', action.type)
//   console.log('payload: ', action.payload)
//   console.log('currentState: ', store.getState())
// }

//root reducer
const middleWare = [process.env.NODE_ENV === 'production' && logger].filter(
  Boolean
);

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = compose(applyMiddleware(...middleWare));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persister = persistStore(store);

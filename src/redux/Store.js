import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import promise from "redux-promise-middleware";
import reducer from "./reducer";
import * as globalAction from './action/GlobalAction'
import { empty, notUndefinedAndNull } from "../component/utils/Validation";


const customMiddleWare = store => next => action => {
    if(action.type.includes("REJECTED")){
      toggleToast(store, next, action);
    }

  next(action);
}

async function toggleToast(store, next, action){
  if(!empty(action.payload.message)){
    store.dispatch(globalAction.showErrorToast(action.payload.message));

    setTimeout(()=>{
      store.dispatch(globalAction.resetErrorToast());
      next(action);
    },5000);
  }
}

export default function configureStore(initialState) {
  const env = process.env.NODE_ENV;

  const isDevelopment = env !== "prod" && env !== "test";

  // Use below store for production version
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // const store = (isDevelopment) ?
  const store = createStore(
    reducer,
    initialState,
      //  composeEnhancers(applyMiddleware(promise, thunkMiddleware, logger, customMiddleWare))
composeEnhancers(applyMiddleware(promise, thunkMiddleware, customMiddleWare))
  );
  // : createStore(reducer, initialState, compose(
  //     applyMiddleware(
  //         promiseMiddleware(),
  //         thunkMiddleware
  //     )));

  return store;
}


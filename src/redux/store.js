import { createStore, applyMiddleware } from "redux";
// Note: The middleWare is used between the action and root reducer
import { persistStore } from "redux-persist";

import logger from "redux-logger";
// The above essentially catches the action and console.logs it out
// making it easier to debug the code

import rootReducer from "./root-reducer";

// middlewares are functions we write that catch actions and do something before the reducer
// An example of this is the logger
const middlewares = [];

// We want to check logger when env variable in node is set to development
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

// Create our store with the imports
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

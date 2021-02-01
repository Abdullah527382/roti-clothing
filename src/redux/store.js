import { createStore, applyMiddleware } from "redux";
// Note: The middleWare is used between the action and root reducer
import { persistStore } from "redux-persist";

import logger from "redux-logger";
// The above essentially catches the action and console.logs it out
// making it easier to debug the code

import rootReducer from "./root-reducer";

const middlewares = [logger];

// Create our store with the imports
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };

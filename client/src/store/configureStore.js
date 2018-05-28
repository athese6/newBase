import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware,
} from 'redux';
import {createLogger} from 'redux-logger';
import ReduxThunk from 'redux-thunk'
import {appReducer} from './appReducer';

const middleWare = [];

middleWare.push(ReduxThunk);

const loggerMiddleware = createLogger({
    predicate: () => process.env.NODE_ENV === 'development',
});
middleWare.push(loggerMiddleware);

// if you're also using redux-thunk, add it as a middleware
const createStoreWithMiddleware = compose(applyMiddleware(...middleWare))(createStore);

const rootReducer = combineReducers({
    app: appReducer,
});

export default function configureStore(initialState = {}) {
    return createStoreWithMiddleware(rootReducer, initialState);
};

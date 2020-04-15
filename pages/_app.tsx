import * as React from 'react'
import withRedux from 'next-redux-wrapper';
import App  from 'next/app';

import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducer'

class MyApp extends App {
    public render() {
        const { Component, pageProps, store } = this.props as any;
        return(
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        )
    }
}
const configureStore = (initialState?: any, options?: any) => {
    const middlewares: any = []; // 미들웨어들을 넣으면 된다.
    const enhancer = process.env.NODE_ENV === 'production' ? 
        compose(applyMiddleware(...middlewares)) : 
            composeWithDevTools(
                applyMiddleware(...middlewares)
            );
    const store = createStore(reducer, {}, enhancer);
    return store;
}
  
  export default withRedux(configureStore)(MyApp);
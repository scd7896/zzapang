import * as React from "react";
import withRedux from "next-redux-wrapper";
import App, { AppContext } from "next/app";

import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import HeaderLayout from "../component/template/HeaderLayout";
import reducer from "../reducer";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  public render() {
    const { Component, pageProps, store } = this.props as any;
    return (
      <Provider store={store}>
        <HeaderLayout />
        <Component {...pageProps} />
      </Provider>
    );
  }
}
const configureStore = (initialState?: any, options?: any) => {
  const middlewares: any = []; // 미들웨어들을 넣으면 된다.
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, initialState, enhancer);
  return store;
};

export default withRedux(configureStore)(MyApp);

import App from 'next/app';
import { Provider } from "react-redux";
import store from "../store";

import Page from '../components/Page'

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <Provider store={store}>
                <Page>
                    <Component {...pageProps} />
                </Page>
            </Provider>
        )
    }
}

export default MyApp;
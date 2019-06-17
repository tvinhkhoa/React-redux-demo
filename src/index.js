import React from "react";
import ReactDOM from "react-dom";
import List from "./js/components/container/List.jsx"
import { Provider } from 'react-redux';
import store from "stores/store";

const Wrapper = document.getElementById("create-article-form");
Wrapper
? ReactDOM.render(
    <Provider store={store}>
        <List/>
    </Provider>, Wrapper) 
: false;


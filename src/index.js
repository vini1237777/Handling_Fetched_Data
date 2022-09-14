import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./store/reducer/Users";
import albumsReducer from "./store/Albums";
import { BrowserRouter } from "react-router-dom";

const reducer = {
  users: usersReducer,
  albums: albumsReducer,
};

const store = configureStore({ reducer });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

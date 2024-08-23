import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./components/utils/storage";
import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// Find the root element
const container = document.getElementById("root");

// Create a root
const root = createRoot(container!);

// Initial render
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

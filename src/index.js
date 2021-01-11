import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import reducer from "./store/reducer";
import thunk from "redux-thunk";

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ &&
		window.__REDUX_DEVTOOLS_EXTENSION__(applyMiddleware(thunk))
);

ReactDOM.render(
	<Provider store={store}>
		<App />,
	</Provider>,
	document.getElementById("root")
);

reportWebVitals();

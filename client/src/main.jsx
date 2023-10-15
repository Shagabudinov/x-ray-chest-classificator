import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Library from "./features/Library.jsx";
import Header from "./features/Header.jsx";
import NavBar from "./features/NavBar.jsx";
import SendImage from "./features/SendImage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: [<Header key="Header"/>, <NavBar key="NavBar"/>],
        children: [{ index: true, element: <SendImage /> },
      {
        path: "/Library",
        element: <Library/>
      }],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);

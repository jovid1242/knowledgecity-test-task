import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

// components
import App from "App"
import reportWebVitals from "./reportWebVitals"

// store
import { store } from "store"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

reportWebVitals()

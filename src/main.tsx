import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter as Route } from "react-router-dom";
import App from './App'
import './index.css'
import Store from './Redux/Store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={Store}>
      <Route>
        <App />
      </Route>
    </Provider>
  </React.StrictMode>,
)

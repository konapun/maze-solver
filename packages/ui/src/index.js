import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import routes from './routes'
import App from './App'
import configureStore from './configureStore'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const store = configureStore()
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        {routes}
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()

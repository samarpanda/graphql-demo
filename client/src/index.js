import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import './index.css'

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('app'))

if(module.hot){
  module.hot.accept()
}

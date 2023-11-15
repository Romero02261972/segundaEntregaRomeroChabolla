import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import { navBar } from './components/navBar/navBar'
import {catalogo} from './components/catalogo/catalogo'
import { productDetail } from './components/productDetail/productDetail'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

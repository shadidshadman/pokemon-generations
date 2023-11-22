import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from "react-router-dom"
import App from './App.jsx'
import "./app.css"

ReactDOM.render(
  <HashRouter><App /></HashRouter>,
  document.getElementById('root')
);
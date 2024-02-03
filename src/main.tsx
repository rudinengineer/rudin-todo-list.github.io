import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './pages/Create.tsx'
import Edit from './pages/Edit.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/create' element={<Create />} />
        <Route path='/note/:id' element={<Edit />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

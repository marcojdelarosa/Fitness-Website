import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Homepage from './Homepage.jsx'
import Login from './login.jsx'
import CreateAccountPage from './createAccountPage.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<CreateAccountPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

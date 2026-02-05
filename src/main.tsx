import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router";
import Home from './pages/Home.tsx';
import MainLayout from './Layouts/MainLayout.tsx';
import AuthPage from './pages/authentication/AuthPage.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />} >
      <Route path="/authPage" element={<AuthPage />} />

      <Route path="/" element={<Home />} />
      </Route>

    </Routes>

      </BrowserRouter>
  </StrictMode>,
)

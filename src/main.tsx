import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './component/Header/Header.tsx'
import App from './App.tsx'
import Hero from './component/Hero/Hero.tsx'
import Portofolio from './component/Portfolio/Portfolio.tsx'
import Slider from './component/Slider/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Hero />
    <Portofolio />
    <Slider />
  </StrictMode>,
)

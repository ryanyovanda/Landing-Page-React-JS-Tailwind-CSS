import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './component/Header/Header.tsx'
import App from './App.tsx'
import Hero from './component/Hero/Hero.tsx'
import Portofolio from './component/Portfolio/Portfolio.tsx'
import Slider from './component/Slider/index.tsx'
import Testimonial from './component/Tesimonial/index.tsx'
import PreFooter from './component/PreFooter/index.tsx'
import Footer from './component/Footer/index.tsx'
import Navbar from './component/NavBar/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Navbar />
    <Hero />
    <Portofolio />
    <Testimonial />
    <PreFooter />
    <Footer />
  </StrictMode>
)

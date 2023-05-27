import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import img1 from './assets/imgs/img1.jpg'
import AboutUs from './sections/AboutUs'
import Products from './sections/Products'

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Header />
      <img src={img1}  />
      <AboutUs />
      <Products />
    </>
  )
}

export default App

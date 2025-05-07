import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import Productlist from './Pages/Productlist/Productlist'
import ProductInnerPage from './Pages/ProductInnerpage/ProductInnerPage'
import LoginPage from './Pages/LoginPage/LoginPage'
import RegisterPage from './Pages/RegisterPage/RegisterPage'
import AboutPage from './Pages/AboutPage/AboutPage'

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProductList" element={<Productlist/>} />
        <Route path="/ProductInner" element={<ProductInnerPage/>} />
        <Route path="/Login" element={<LoginPage/>} />
        <Route path="/Register" element={<RegisterPage/>} />
        <Route path="/About" element={<AboutPage/>} />
      </Routes>
     </Router>
    </>
  )
}

export default App

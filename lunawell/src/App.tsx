import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import WeightManagement from './pages/WeightManagement'
import PeptideTherapy from './pages/PeptideTherapy'
import NaturalTherapies from './pages/NaturalTherapies'
import Products from './pages/Products'
import Fees from './pages/Fees'
import Book from './pages/Book'
import ClinicalPsychologist from './pages/ClinicalPsychologist'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/weight-management" element={<WeightManagement />} />
          <Route path="/peptide-therapy" element={<PeptideTherapy />} />
          <Route path="/natural-therapies" element={<NaturalTherapies />} />
          <Route path="/products" element={<Products />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/book" element={<Book />} />
          <Route path="/clinical-psychologist" element={<ClinicalPsychologist />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

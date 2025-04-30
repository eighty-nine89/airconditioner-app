import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Product from './pages/Product';
import Faqs from './pages/Faqs';
import Storepolicy from './pages/Storepolicy';
import Deliverypolicy from './pages/Deliverypolicy';
import Services from './pages/Services';
import Gallery from './pages/Gallery';

function App() {
  return (
    <div>
      <>
      <Routes>
        <Route path='/' index element={<Home/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/faqs' element={<Faqs/>}/>
        <Route path='/storepolicy' element={<Storepolicy/>}/>
        <Route path='/deliverypolicy' element={<Deliverypolicy/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
      </Routes>
      </>
    </div>
  );
}

export default App;

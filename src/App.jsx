import React from 'react';
import Home from './pages/Home';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './pages/ProducDetail';
import SearchBar from './components/Home/SearchBar';

const App = () =>

    
<Routes>
    <Route path='' element={<Home />}></Route>

    <Route path='/products/:id' element={<ProductDetail />}></Route>
</Routes>
export default App;

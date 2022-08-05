//import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Checkout from './components/Checkout';
import Header from './components/Header';
import HomePage from './components/HomePage';
import StorePage from './components/StorePage';

function App() {
  // Stores all the stateful logic here...

  return (
    <div className="relative font-alma bg-opacity-70 bg-light w-screen min-h-screen grid grid-rows-[100px]">
      <div className="bg-red-car bg-center absolute inset-0 -z-10 min-w-full h-full bg-cover"></div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="store" element={<StorePage />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
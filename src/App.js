import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Story from './components/Story/Story';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Coffee Passport</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Story />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

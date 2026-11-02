import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CardGrid from './components/CardGrid';
import Footer from './components/Footer';
import './styles/Layout.css';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Navbar />
      <div className="main-layout-wrapper">
        <main className="content-area">
          <h2>Task 2: Responsive Fluid Grid Layout</h2>
          <CardGrid />
        </main>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
};

export default App;

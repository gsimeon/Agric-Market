import React, { useState } from 'react';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import FeatureSection from './components/features/FeatureSection';
import Dashboard from './components/dashboard/Dashboard';
import Marketplace from './components/marketplace/Marketplace';
import ProductDetails from './components/product/ProductDetails';
import About from './components/about/About';
import ChatButton from './components/chat/ChatButton';
import ChatWindow from './components/chat/ChatWindow';
import { Product } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isChatMinimized, setIsChatMinimized] = useState(false);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setSelectedProduct(null);
  };

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product-details');
  };

  const handleBackToMarketplace = () => {
    setSelectedProduct(null);
    setCurrentPage('marketplace');
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    setIsChatMinimized(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header onNavigate={handleNavigation} currentPage={currentPage} />
      <main className="pt-16">
        {currentPage === 'home' && (
          <>
            <Hero />
            <FeatureSection />
          </>
        )}
        {currentPage === 'dashboard' && <Dashboard />}
        {currentPage === 'marketplace' && (
          <Marketplace onProductSelect={handleProductSelect} />
        )}
        {currentPage === 'product-details' && selectedProduct && (
          <ProductDetails 
            product={selectedProduct}
            onBack={handleBackToMarketplace}
          />
        )}
        {currentPage === 'about' && <About />}
      </main>

      {!isChatOpen && <ChatButton onClick={toggleChat} />}
      <ChatWindow
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        minimized={isChatMinimized}
        onMinimize={() => setIsChatMinimized(!isChatMinimized)}
      />
    </div>
  );
}

export default App;
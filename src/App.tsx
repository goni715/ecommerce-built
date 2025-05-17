import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { products } from './data/products';
import { Product } from './types/product';

function App() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter products based on search query
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToCart = (product: Product) => {
    setCartItems(prevItems => [...prevItems, product]);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        cartItemCount={cartItems.length} 
        onSearch={handleSearch} 
      />
      
      <main className="py-6">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
              Discover Amazing Products
            </h1>
            <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
              Browse our curated collection of premium products designed to elevate your lifestyle.
              From tech gadgets to fashion accessories, we have something for everyone.
            </p>
          </div>
          
          <ProductList 
            products={filteredProducts} 
            onAddToCart={handleAddToCart} 
          />
        </div>
      </main>
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-bold mb-4">ShopNow</h2>
              <p className="text-gray-400 max-w-md">
                Your one-stop destination for premium products and excellent shopping experience.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shop</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
            <p>© 2025 ShopNow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
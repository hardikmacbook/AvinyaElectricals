import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, User } from 'lucide-react';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Navigation items
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Categories', href: '/categories' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  // Cart items (sample data)
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 29.99, quantity: 2, image: 'https://via.placeholder.com/60' },
    { id: 2, name: 'Product 2', price: 19.99, quantity: 1, image: 'https://via.placeholder.com/60' }
  ]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Add your search logic here
    setIsSearchOpen(false);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <header className="header-outer bg-white shadow-lg sticky top-0 z-50">
      <div className="header-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="header-inner">
          <div className="header-inner-content flex items-center justify-between h-16 md:h-20">
            
            {/* Logo Section */}
            <div className="logo-section flex-shrink-0">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">L</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900 hidden sm:block">Logo</span>
              </div>
            </div>

            {/* Navigation Section - Desktop */}
            <nav className="navbar-section hidden md:flex flex-1 justify-center">
              <div className="flex space-x-8">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-100 rounded-md"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>

            {/* Right Section - Search, Cart, Mobile Menu */}
            <div className="right-section flex items-center space-x-4">
              
              {/* Search Button */}
              <div className="search-component relative">
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <Search className="w-5 h-5" />
                </button>
                
                {/* Search Dropdown */}
                {isSearchOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 p-4 z-50">
                    <div className="flex">
                      <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        autoFocus
                      />
                      <button
                        onClick={handleSearch}
                        className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors duration-200"
                      >
                        <Search className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Cart Menu */}
              <div className="cart-component relative">
                <button
                  onClick={() => setIsCartOpen(!isCartOpen)}
                  className="relative p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {getTotalItems()}
                    </span>
                  )}
                </button>

                {/* Cart Dropdown */}
                {isCartOpen && (
                  <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                    <div className="p-4 border-b border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900">Shopping Cart</h3>
                    </div>
                    
                    <div className="max-h-80 overflow-y-auto">
                      {cartItems.length === 0 ? (
                        <div className="p-4 text-center text-gray-500">
                          Your cart is empty
                        </div>
                      ) : (
                        <div className="p-4 space-y-4">
                          {cartItems.map((item) => (
                            <div key={item.id} className="flex items-center space-x-3">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-12 h-12 object-cover rounded"
                              />
                              <div className="flex-1">
                                <h4 className="text-sm font-medium text-gray-900">{item.name}</h4>
                                <p className="text-sm text-gray-500">
                                  ${item.price} x {item.quantity}
                                </p>
                              </div>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 hover:text-red-700 p-1"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {cartItems.length > 0 && (
                      <div className="p-4 border-t border-gray-200">
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-semibold text-gray-900">Total: ${getTotalPrice()}</span>
                        </div>
                        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200">
                          Checkout
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Overlay for dropdowns */}
      {(isSearchOpen || isCartOpen) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-40"
          onClick={() => {
            setIsSearchOpen(false);
            setIsCartOpen(false);
          }}
        />
      )}
    </header>
  );
};

export default Header;
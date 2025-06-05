import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, ShoppingBag, Star } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Hero slides data
  const slides = [
    {
      id: 1,
      title: "Summer Collection 2024",
      subtitle: "Discover the Latest Trends",
      description: "Explore our exclusive summer collection featuring premium quality fabrics and cutting-edge designs that define modern fashion.",
      image: "https://demo4techies.com/etrend/presta/demo/modules/ps_imageslider/images/sample-1.jpg",
      buttonText: "Shop Now",
      price: "Starting from $49",
      rating: 4.8,
      badge: "New Arrival",
      gradient: "from-blue-600/80 to-purple-600/80"
    },
    {
      id: 2,
      title: "Tech Revolution",
      subtitle: "Innovation at Your Fingertips",
      description: "Experience the future with our revolutionary tech products designed to enhance your digital lifestyle and productivity.",
      image: "https://demo4techies.com/etrend/presta/demo/modules/ps_imageslider/images/sample-1.jpg",
      buttonText: "Explore Tech",
      price: "Up to 30% Off",
      rating: 4.9,
      badge: "Limited Time",
      gradient: "from-emerald-600/80 to-teal-600/80"
    },
    {
      id: 3,
      title: "Wellness & Lifestyle",
      subtitle: "Live Your Best Life",
      description: "Transform your daily routine with our carefully curated wellness products that promote health, happiness, and harmony.",
      image: "https://demo4techies.com/etrend/presta/demo/modules/ps_imageslider/images/sample-1.jpg",
      buttonText: "Start Journey",
      price: "From $29",
      rating: 4.7,
      badge: "Trending",
      gradient: "from-orange-600/80 to-red-600/80"
    },
    {
      id: 4,
      title: "Home & Decor",
      subtitle: "Create Beautiful Spaces",
      description: "Transform your living space with our stunning home decor collection that blends style, comfort, and functionality.",
      image: "https://demo4techies.com/etrend/presta/demo/modules/ps_imageslider/images/sample-1.jpg",
      buttonText: "Shop Decor",
      price: "Save 25%",
      rating: 4.6,
      badge: "Sale",
      gradient: "from-violet-600/80 to-pink-600/80"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="hero-slider relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Slides Container */}
      <div className="slides-wrapper relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            {/* Background Image */}
            <div className="slide-bg absolute inset-0">
              <img 
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80';
                }}
              />
            </div>
            
            {/* Gradient Overlay */}
            <div className={`slide-overlay absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />
            
            {/* Content */}
            <div className="slide-content relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                  {/* Badge */}
                  <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-white/20 backdrop-blur-sm text-white border border-white/30 transform transition-all duration-700 delay-300 ${
                    index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                    <Star className="w-4 h-4 mr-2 fill-current" />
                    {slide.badge}
                  </div>

                  {/* Title */}
                  <h1 className={`text-5xl md:text-7xl font-bold text-white mb-4 leading-tight transform transition-all duration-700 delay-500 ${
                    index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}>
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <h2 className={`text-xl md:text-2xl text-white/90 mb-6 font-light transform transition-all duration-700 delay-700 ${
                    index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}>
                    {slide.subtitle}
                  </h2>

                  {/* Description */}
                  <p className={`text-lg text-white/80 mb-8 leading-relaxed max-w-xl transform transition-all duration-700 delay-900 ${
                    index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}>
                    {slide.description}
                  </p>

                  {/* Price & Rating */}
                  <div className={`flex items-center space-x-6 mb-8 transform transition-all duration-700 delay-1100 ${
                    index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/30">
                      <span className="text-white font-semibold">{slide.price}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-white font-medium">{slide.rating}</span>
                      <span className="text-white/70">(2.5k reviews)</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className={`transform transition-all duration-700 delay-1300 ${
                    index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}>
                    <button className="group relative bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl flex items-center space-x-2 overflow-hidden">
                      {/* Button background animation */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
                      
                      {/* Button content */}
                      <div className="relative z-10 flex items-center space-x-2 group-hover:text-white transition-colors duration-500">
                        <ShoppingBag className="w-5 h-5 group-hover:animate-bounce transition-transform duration-300" />
                        <span className="relative">
                          {slide.buttonText}
                          <div className="absolute inset-0 group-hover:animate-pulse"></div>
                        </span>
                      </div>
                      
                      {/* Ripple effect */}
                      <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-hover:animate-ping transition-opacity duration-300"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="nav-arrow nav-arrow-left absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 group"
      >
        <ChevronLeft className="w-6 h-6 group-hover:animate-bounce" />
      </button>

      <button
        onClick={nextSlide}
        className="nav-arrow nav-arrow-right absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 group"
      >
        <ChevronRight className="w-6 h-6 group-hover:animate-bounce" />
      </button>

      {/* Dots Navigation */}
      <div className="dots-navigation absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`dot w-3 h-3 rounded-full transition-all duration-300 hover:animate-bounce ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="progress-bar absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="progress-fill h-full bg-white transition-all duration-300 ease-linear"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Auto-play Control */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="autoplay-toggle absolute top-8 right-8 z-20 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300 group hover:scale-110"
      >
        <Play className={`w-5 h-5 group-hover:animate-bounce ${isAutoPlaying ? 'animate-pulse' : ''}`} />
      </button>

      {/* Slide Counter */}
      <div className="slide-counter absolute top-8 left-8 z-20 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-white font-medium">
        {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>
    </div>
  );
};

export default HeroSlider;
import React, { useState, useEffect } from 'react';
import { X, Mail, Gift, Sparkles } from 'lucide-react';

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem('newsletterPopupSeen');
    
    if (!hasSeenPopup) {
      // Show popup after 10 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('newsletterPopupSeen', 'true');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would integrate with Mailchimp API
    // For now, we'll simulate a successful subscription
    console.log('Subscribing email:', email);
    
    setIsSubscribed(true);
    
    // Close popup after 3 seconds
    setTimeout(() => {
      handleClose();
      setEmail('');
      setIsSubscribed(false);
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden transform transition-all animate-scale-in">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>

        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-3xl opacity-30 -translate-y-32 translate-x-32"></div>

        {/* Content */}
        <div className="relative p-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full mb-4">
              <Gift className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Get 10% OFF!
            </h2>
            <p className="text-gray-600">
              Subscribe to our newsletter and receive exclusive offers on K-beauty products
            </p>
          </div>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Get My 10% Discount
              </button>
              <p className="text-xs text-center text-gray-500">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Sparkles className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                Welcome to the K-Beauty Club!
              </h3>
              <p className="text-gray-600">
                Check your email for your discount code
              </p>
            </div>
          )}

          {/* Features */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-center text-gray-600 mb-2">Join 50,000+ beauty enthusiasts</p>
            <div className="flex justify-center space-x-6 text-xs text-gray-500">
              <span>✨ Exclusive Offers</span>
              <span>💝 New Arrivals</span>
              <span>🎁 Beauty Tips</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;
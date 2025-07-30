import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, ShoppingCart, Zap } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Sale Badge */}
      {product.discount && (
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
            <Zap className="h-3 w-3" />
            <span>{product.discount}% OFF</span>
          </div>
        </div>
      )}

      {/* Wishlist Button */}
      <button
        onClick={() => toggleWishlist(product.id)}
        className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all"
      >
        <Heart
          className={`h-5 w-5 transition-colors ${
            isInWishlist(product.id)
              ? 'text-red-500 fill-current'
              : 'text-gray-400 hover:text-red-500'
          }`}
        />
      </button>

      {/* Product Image */}
      <Link to={`/products/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden bg-gradient-to-br from-pink-50 to-purple-50">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-6">
        <p className="text-sm text-purple-600 font-medium mb-2">{product.brand}</p>
        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-purple-600 transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <div>
            {product.salePrice ? (
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-gray-900">
                  ${product.salePrice.toFixed(2)}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-2xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
          <button
            onClick={() => addToCart(product)}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>

        {/* Quick Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {product.bestSeller && (
            <span className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-full">
              Best Seller
            </span>
          )}
          {product.featured && (
            <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
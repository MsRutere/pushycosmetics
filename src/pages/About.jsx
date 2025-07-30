import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, Star, Users, Shield, Award, Sparkles, 
  ArrowRight, Globe, Package, Leaf 
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Authenticity',
      description: 'We guarantee 100% authentic Korean beauty products sourced directly from trusted brands.'
    },
    {
      icon: Leaf,
      title: 'Natural Ingredients',
      description: 'Carefully curated products with natural, skin-loving ingredients for all skin types.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We provide exceptional service and support.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Bringing the best of K-beauty to customers worldwide with fast, reliable shipping.'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '500+', label: 'Products' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '24/7', label: 'Customer Support' }
  ];

  const team = [
    {
      name: 'Sarah Kim',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      bio: 'K-beauty enthusiast with 10+ years in the industry'
    },
    {
      name: 'Jessica Park',
      role: 'Head of Curation',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      bio: 'Expert in Korean skincare trends and innovations'
    },
    {
      name: 'Emily Chen',
      role: 'Customer Success',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop',
      bio: 'Dedicated to ensuring your K-beauty journey is perfect'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-5 w-5 text-purple-500" />
              <span className="text-sm font-medium">About PushyCosmetics</span>
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Your Gateway to K-Beauty Excellence
            </h1>
            <p className="text-xl text-gray-700">
              We're passionate about bringing you the finest Korean skincare products, 
              helping you achieve the radiant, healthy skin you deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2020, PushyCosmetics was born from a love for Korean beauty and 
                a desire to make authentic K-beauty products accessible to everyone. What started 
                as a small online shop has grown into a trusted destination for skincare enthusiasts 
                worldwide.
              </p>
              <p className="text-gray-600 mb-4">
                We believe that everyone deserves to experience the transformative power of K-beauty. 
                Our team carefully selects each product, ensuring it meets our high standards for 
                quality, effectiveness, and authenticity.
              </p>
              <p className="text-gray-600 mb-6">
                From cult favorites to innovative new releases, we bring you the best of Korean 
                skincare, backed by our commitment to exceptional customer service and education.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <span>Explore Our Collection</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=600&fit=crop"
                  alt="K-Beauty Products"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-pink-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do, from product selection to customer service.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Passionate K-beauty experts dedicated to bringing you the best skincare experience.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-purple-600 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Why Choose PushyCosmetics?</h2>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="flex flex-col items-center">
                  <Award className="h-12 w-12 text-purple-600 mb-4" />
                  <h3 className="font-semibold mb-2">Curated Selection</h3>
                  <p className="text-sm text-gray-600">
                    Hand-picked products tested by our K-beauty experts
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Package className="h-12 w-12 text-purple-600 mb-4" />
                  <h3 className="font-semibold mb-2">Fast Shipping</h3>
                  <p className="text-sm text-gray-600">
                    Quick delivery with careful packaging to protect your products
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Heart className="h-12 w-12 text-purple-600 mb-4" />
                  <h3 className="font-semibold mb-2">Love Guarantee</h3>
                  <p className="text-sm text-gray-600">
                    30-day returns if you're not completely satisfied
                  </p>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-white text-purple-600 px-6 py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <span>Get in Touch</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the K-Beauty Revolution</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, skincare tips, and new product launches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/30"
            />
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
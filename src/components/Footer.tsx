import { Link } from 'react-router-dom';
import { Leaf, Mail, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-eco-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 justify-center sm:justify-start">
              <Leaf className="h-6 w-6" />
              <span className="text-xl font-bold">EcoVoyage</span>
            </div>
            <p className="text-eco-100 text-center sm:text-left text-sm sm:text-base">
              Promoting sustainable tourism and environmental consciousness through community engagement.
            </p>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/social" className="block text-eco-100 hover:text-white text-sm sm:text-base">
                Social Hub
              </Link>
              <Link to="/marketplace" className="block text-eco-100 hover:text-white text-sm sm:text-base">
                Marketplace
              </Link>
              <Link to="/blog" className="block text-eco-100 hover:text-white text-sm sm:text-base">
                Blog & News
              </Link>
            </div>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-2">
              <a 
                href="mailto:info@ecovoyage.com" 
                className="flex items-center space-x-2 text-eco-100 hover:text-white justify-center sm:justify-start text-sm sm:text-base"
              >
                <Mail className="h-4 w-4" />
                <span>info@ecovoyage.com</span>
              </a>
            </div>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <a href="#" className="text-eco-100 hover:text-white p-2 hover:bg-eco-700 rounded-full transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-eco-100 hover:text-white p-2 hover:bg-eco-700 rounded-full transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-eco-700 text-center">
          <p className="text-eco-100 text-sm">&copy; {new Date().getFullYear()} EcoVoyage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
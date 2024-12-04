import { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Search, Hotel, Mountain } from 'lucide-react';

const backgroundImages = [
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1571401835393-8c5f35328320?ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1518790944083-13d890195b9d?ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?ixlib=rb-4.0.3',
];

export default function BookingSection() {
  const [bookingType, setBookingType] = useState<'trip' | 'stay'>('trip');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative">
      <div className="absolute inset-0 overflow-hidden">
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      <div className="relative py-8 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Book Your Eco Adventure</h2>
            <p className="text-gray-200 text-sm sm:text-base">Discover sustainable accommodations and eco-friendly experiences</p>
          </div>

          <div className="flex justify-center space-x-2 sm:space-x-4 mb-6 sm:mb-8">
            <button
              onClick={() => setBookingType('trip')}
              className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base ${
                bookingType === 'trip'
                  ? 'bg-eco-600 text-white shadow-lg scale-105'
                  : 'bg-white/90 text-gray-600 hover:bg-eco-50'
              }`}
            >
              <Mountain className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Eco Tours
            </button>
            <button
              onClick={() => setBookingType('stay')}
              className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base ${
                bookingType === 'stay'
                  ? 'bg-eco-600 text-white shadow-lg scale-105'
                  : 'bg-white/90 text-gray-600 hover:bg-eco-50'
              }`}
            >
              <Hotel className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Eco Stays
            </button>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-4 sm:p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Where to?"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-eco-500"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-eco-500"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {bookingType === 'trip' ? 'Duration' : 'Check-out'}
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  {bookingType === 'trip' ? (
                    <select className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-eco-500">
                      <option>1-3 days</option>
                      <option>4-7 days</option>
                      <option>8-14 days</option>
                      <option>15+ days</option>
                    </select>
                  ) : (
                    <input
                      type="date"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-eco-500"
                    />
                  )}
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Travelers</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <select className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco-500 focus:border-eco-500">
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4+ People</option>
                  </select>
                </div>
              </div>
            </div>

            <button className="w-full mt-6 bg-eco-600 text-white py-3 rounded-lg font-medium hover:bg-eco-700 transition-colors duration-300 flex items-center justify-center">
              <Search className="h-5 w-5 mr-2" />
              <span className="text-sm sm:text-base">
                Search {bookingType === 'trip' ? 'Eco Tours' : 'Eco Stays'}
              </span>
            </button>
          </div>

          <div className="mt-8 sm:mt-12 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4">
            {[
              { icon: <Mountain className="h-5 w-5 sm:h-6 sm:w-6" />, label: 'Nature Retreats' },
              { icon: <Hotel className="h-5 w-5 sm:h-6 sm:w-6" />, label: 'Adventure Tours' },
              { icon: <Hotel className="h-5 w-5 sm:h-6 sm:w-6" />, label: 'Eco Lodges' },
              { icon: <Users className="h-5 w-5 sm:h-6 sm:w-6" />, label: 'Group Tours' },
            ].map((item, index) => (
              <button
                key={index}
                className="flex flex-col items-center p-3 sm:p-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:transform hover:scale-105"
              >
                <span className="text-eco-600 mb-1 sm:mb-2">{item.icon}</span>
                <span className="text-gray-700 text-xs sm:text-sm text-center">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
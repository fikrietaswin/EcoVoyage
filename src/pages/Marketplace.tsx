import { Star, MapPin, Calendar } from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  duration: string;
}

export default function Marketplace() {
  const experiences: Experience[] = [
    {
      id: 1,
      title: "Rainforest Conservation Tour",
      location: "Amazon, Brazil",
      price: 299,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3",
      duration: "3 days"
    },
    {
      id: 2,
      title: "Sustainable Farm Stay",
      location: "Tuscany, Italy",
      price: 150,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-4.0.3",
      duration: "2 days"
    },
    {
      id: 3,
      title: "Marine Conservation Project",
      location: "Great Barrier Reef, Australia",
      price: 399,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?ixlib=rb-4.0.3",
      duration: "5 days"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Eco Experiences Marketplace</h1>
        <p className="text-gray-600 mt-2">Discover and book sustainable travel experiences</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((experience) => (
          <div key={experience.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 relative">
              <img
                src={experience.image}
                alt={experience.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">{experience.title}</h3>
                <div className="flex items-center text-yellow-500">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="ml-1">{experience.rating}</span>
                </div>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{experience.location}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{experience.duration}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-eco-600">
                  ${experience.price}
                </span>
                <button className="px-4 py-2 bg-eco-600 text-white rounded-md hover:bg-eco-700 transition">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
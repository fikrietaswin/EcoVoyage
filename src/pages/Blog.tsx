import { Clock, User } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

export default function Blog() {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: "10 Tips for Sustainable Travel in 2024",
      excerpt: "Discover how to minimize your environmental impact while exploring the world...",
      author: "Emma Green",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3",
      category: "Travel Tips"
    },
    {
      id: 2,
      title: "The Rise of Eco-Lodges: A New Era of Accommodation",
      excerpt: "Exploring the growing trend of environmentally conscious accommodation options...",
      author: "Michael Rivers",
      date: "March 12, 2024",
      image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?ixlib=rb-4.0.3",
      category: "Trends"
    },
    {
      id: 3,
      title: "Carbon Offset Programs: What You Need to Know",
      excerpt: "Understanding how to effectively offset your travel carbon footprint...",
      author: "Sarah Chen",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1569097386664-8c162d099602?ixlib=rb-4.0.3",
      category: "Environment"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Blog & News</h1>
        <p className="text-gray-600 mt-2">Latest insights and updates from the eco-tourism world</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-eco-600 text-white text-sm rounded-full">
                  {post.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center text-gray-500 text-sm">
                <div className="flex items-center mr-4">
                  <User className="h-4 w-4 mr-1" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
              </div>
              <button className="mt-4 text-eco-600 font-semibold hover:text-eco-700">
                Read More →
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
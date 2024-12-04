import { useState } from 'react';
import { MessageSquare, Heart, Share2, User } from 'lucide-react';

interface Post {
  id: number;
  author: string;
  content: string;
  likes: number;
  comments: number;
  timestamp: string;
}

export default function Social() {
  const [posts] = useState<Post[]>([
    {
      id: 1,
      author: "EcoExplorer",
      content: "Just discovered an amazing eco-lodge in Costa Rica! The solar-powered facilities and organic garden were incredible. #SustainableTravel",
      likes: 24,
      comments: 5,
      timestamp: "2h ago"
    },
    {
      id: 2,
      author: "GreenWanderer",
      content: "Tips for zero-waste traveling: Always carry a reusable water bottle, cloth bags, and bamboo utensils. Small changes, big impact! 🌱",
      likes: 18,
      comments: 3,
      timestamp: "4h ago"
    },
  ]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 sm:py-8">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Social Hub</h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">Connect with eco-conscious travelers around the world</p>
      </div>

      {/* Create Post */}
      <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-eco-100 flex items-center justify-center">
              <User className="h-5 w-5 sm:h-6 sm:w-6 text-eco-600" />
            </div>
          </div>
          <div className="flex-1">
            <textarea
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-eco-500 focus:border-eco-500 text-sm sm:text-base"
              placeholder="Share your eco-travel experience..."
              rows={3}
            ></textarea>
            <button className="mt-3 px-4 py-2 bg-eco-600 text-white rounded-md hover:bg-eco-700 transition text-sm sm:text-base">
              Post
            </button>
          </div>
        </div>
      </div>

      {/* Posts Feed */}
      <div className="space-y-4 sm:space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow p-4 sm:p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-eco-100 flex items-center justify-center">
                <User className="h-5 w-5 sm:h-6 sm:w-6 text-eco-600" />
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base">{post.author}</h3>
                <p className="text-xs sm:text-sm text-gray-500">{post.timestamp}</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-800 mb-4">{post.content}</p>
            <div className="flex items-center space-x-6 text-gray-500">
              <button className="flex items-center space-x-2 hover:text-eco-600">
                <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base">{post.likes}</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-eco-600">
                <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base">{post.comments}</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-eco-600">
                <Share2 className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base">Share</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
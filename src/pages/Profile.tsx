import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { User, MapPin, Edit2, Save } from 'lucide-react';

export default function Profile() {
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    bio: user?.bio || '',
    location: user?.location || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(formData);
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-eco-600 h-32"></div>
        <div className="relative px-6 pb-6">
          <div className="flex flex-col items-center -mt-16">
            <div className="w-32 h-32 rounded-full border-4 border-white bg-eco-100 flex items-center justify-center">
              <User className="h-16 w-16 text-eco-600" />
            </div>
            {!isEditing ? (
              <div className="mt-4 text-center">
                <h2 className="text-2xl font-bold text-gray-900">{user?.name}</h2>
                {user?.location && (
                  <div className="flex items-center justify-center mt-2 text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{user.location}</span>
                  </div>
                )}
                {user?.bio && <p className="mt-4 text-gray-600">{user.bio}</p>}
                <button
                  onClick={() => setIsEditing(true)}
                  className="mt-6 inline-flex items-center px-4 py-2 border border-eco-600 text-eco-600 rounded-md hover:bg-eco-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-eco-500"
                >
                  <Edit2 className="h-4 w-4 mr-2" />
                  Edit Profile
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 w-full max-w-md">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-eco-500 focus:ring-eco-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-eco-500 focus:ring-eco-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Bio</label>
                    <textarea
                      value={formData.bio}
                      onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                      rows={3}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-eco-500 focus:ring-eco-500"
                    />
                  </div>

                  <div className="flex space-x-4">
                    <button
                      type="submit"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-eco-600 hover:bg-eco-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-eco-500"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-eco-500"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
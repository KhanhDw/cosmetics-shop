import React, { useState } from 'react';
import { User, Mail, Lock, Globe, Phone, MapPin, Camera, Save, Shield } from 'lucide-react';
import { useAdminTheme } from '../contexts/AdminThemeContext';

interface AdminProfile {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  timezone: string;
  language: string;
  avatar: string;
  lastLogin: string;
  status: string;
}

const AccountConfig: React.FC = () => {
  const { adminDarkMode } = useAdminTheme();
  const [profile, setProfile] = useState<AdminProfile>({
    id: 1,
    name: "Admin User",
    email: "admin@example.com",
    phone: "+84 123 456 789",
    role: "Administrator",
    timezone: "Asia/Ho_Chi_Minh",
    language: "English",
    avatar: "",
    lastLogin: "2023-10-15 10:30:00",
    status: "active"
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically save the profile to your backend
    console.log('Saving profile:', profile);
    console.log('Password data:', passwordData);
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Normally you would upload the file to your server
      // For now, just show the file name
      console.log('Avatar file selected:', file.name);
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl font-bold text-[var(--admin-text-primary)]">Account Configuration</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-[var(--admin-card-bg)] p-6 rounded-xl border border-[var(--admin-border)]">
            <div className="flex flex-col items-center mb-6">
              <div className="relative mb-4">
                <div className="w-24 h-24 rounded-full bg-[var(--admin-bg-secondary)] flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--admin-text-accent)] flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                </div>
                <label className="absolute bottom-0 right-0 bg-[var(--admin-text-accent)] p-2 rounded-full cursor-pointer">
                  <Camera className="w-4 h-4 text-white" />
                  <input 
                    type="file" 
                    className="hidden" 
                    onChange={handleAvatarChange}
                    accept="image/*"
                  />
                </label>
              </div>
              <h2 className="text-xl font-semibold text-[var(--admin-text-primary)]">{profile.name}</h2>
              <p className="text-[var(--admin-text-secondary)]">{profile.email}</p>
              <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[var(--admin-bg-tertiary)] text-[var(--admin-text-primary)]">
                <Shield className="w-3 h-3 mr-1" />
                {profile.role}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-[var(--admin-text-secondary)] mr-3" />
                <span className="text-[var(--admin-text-primary)]">{profile.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-[var(--admin-text-secondary)] mr-3" />
                <span className="text-[var(--admin-text-primary)]">{profile.phone}</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 text-[var(--admin-text-secondary)] mr-3" />
                <span className="text-[var(--admin-text-primary)]">{profile.timezone}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-[var(--admin-text-secondary)] mr-3" />
                <span className="text-[var(--admin-text-primary)]">{profile.language}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Settings Form */}
        <div className="lg:col-span-2">
          <div className="bg-[var(--admin-card-bg)] p-6 rounded-xl border border-[var(--admin-border)]">
            <h2 className="text-xl font-semibold text-[var(--admin-text-primary)] mb-6">Account Settings</h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-[var(--admin-text-secondary)] mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--admin-text-accent)] ${
                      isEditing 
                        ? 'border-[var(--admin-border)] bg-[var(--admin-bg-primary)] text-[var(--admin-text-primary)]' 
                        : 'border-transparent bg-transparent text-[var(--admin-text-secondary)] cursor-not-allowed'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--admin-text-secondary)] mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--admin-text-accent)] ${
                      isEditing 
                        ? 'border-[var(--admin-border)] bg-[var(--admin-bg-primary)] text-[var(--admin-text-primary)]' 
                        : 'border-transparent bg-transparent text-[var(--admin-text-secondary)] cursor-not-allowed'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--admin-text-secondary)] mb-1">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={profile.phone}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--admin-text-accent)] ${
                      isEditing 
                        ? 'border-[var(--admin-border)] bg-[var(--admin-bg-primary)] text-[var(--admin-text-primary)]' 
                        : 'border-transparent bg-transparent text-[var(--admin-text-secondary)] cursor-not-allowed'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--admin-text-secondary)] mb-1">
                    Timezone
                  </label>
                  <select
                    name="timezone"
                    value={profile.timezone}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--admin-text-accent)] ${
                      isEditing 
                        ? 'border-[var(--admin-border)] bg-[var(--admin-bg-primary)] text-[var(--admin-text-primary)]' 
                        : 'border-transparent bg-transparent text-[var(--admin-text-secondary)] cursor-not-allowed'
                    }`}
                  >
                    <option value="Asia/Ho_Chi_Minh">Asia/Ho_Chi_Minh (GMT+7)</option>
                    <option value="America/New_York">America/New_York (GMT-5)</option>
                    <option value="Europe/London">Europe/London (GMT+0)</option>
                    <option value="Asia/Tokyo">Asia/Tokyo (GMT+9)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--admin-text-secondary)] mb-1">
                    Language
                  </label>
                  <select
                    name="language"
                    value={profile.language}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--admin-text-accent)] ${
                      isEditing 
                        ? 'border-[var(--admin-border)] bg-[var(--admin-bg-primary)] text-[var(--admin-text-primary)]' 
                        : 'border-transparent bg-transparent text-[var(--admin-text-secondary)] cursor-not-allowed'
                    }`}
                  >
                    <option value="English">English</option>
                    <option value="Vietnamese">Vietnamese</option>
                    <option value="French">French</option>
                    <option value="Spanish">Spanish</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--admin-text-secondary)] mb-1">
                    Role
                  </label>
                  <input
                    type="text"
                    value={profile.role}
                    disabled
                    className="w-full px-3 py-2 border-transparent bg-transparent text-[var(--admin-text-secondary)] cursor-not-allowed"
                  />
                </div>
              </div>

              <h3 className="text-lg font-medium text-[var(--admin-text-primary)] mb-4">Change Password</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div>
                  <label className="block text-sm font-medium text-[var(--admin-text-secondary)] mb-1">
                    Current Password
                  </label>
                  <input
                    type="password"
                    name="currentPassword"
                    value={passwordData.currentPassword}
                    onChange={handlePasswordChange}
                    disabled={!isEditing}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--admin-text-accent)] ${
                      isEditing 
                        ? 'border-[var(--admin-border)] bg-[var(--admin-bg-primary)] text-[var(--admin-text-primary)]' 
                        : 'border-transparent bg-transparent text-[var(--admin-text-secondary)] cursor-not-allowed'
                    }`}
                    placeholder="••••••••"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--admin-text-secondary)] mb-1">
                    New Password
                  </label>
                  <input
                    type="password"
                    name="newPassword"
                    value={passwordData.newPassword}
                    onChange={handlePasswordChange}
                    disabled={!isEditing}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--admin-text-accent)] ${
                      isEditing 
                        ? 'border-[var(--admin-border)] bg-[var(--admin-bg-primary)] text-[var(--admin-text-primary)]' 
                        : 'border-transparent bg-transparent text-[var(--admin-text-secondary)] cursor-not-allowed'
                    }`}
                    placeholder="••••••••"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--admin-text-secondary)] mb-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={passwordData.confirmPassword}
                    onChange={handlePasswordChange}
                    disabled={!isEditing}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--admin-text-accent)] ${
                      isEditing 
                        ? 'border-[var(--admin-border)] bg-[var(--admin-bg-primary)] text-[var(--admin-text-primary)]' 
                        : 'border-transparent bg-transparent text-[var(--admin-text-secondary)] cursor-not-allowed'
                    }`}
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                {!isEditing ? (
                  <button
                    type="button"
                    onClick={() => setIsEditing(true)}
                    className="px-6 py-2 bg-[var(--admin-text-accent)] text-white rounded-lg hover:bg-[var(--admin-text-accent)]/90 transition-colors"
                  >
                    Edit Profile
                  </button>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="px-6 py-2 border border-[var(--admin-border)] text-[var(--admin-text-primary)] rounded-lg hover:bg-[var(--admin-bg-secondary)] transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex items-center px-6 py-2 bg-[var(--admin-text-accent)] text-white rounded-lg hover:bg-[var(--admin-text-accent)]/90 transition-colors"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountConfig;
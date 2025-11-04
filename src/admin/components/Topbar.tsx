import React, { useState, useRef, useEffect } from 'react';
import { Bell, Search, Menu, User, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdminThemeToggle from './AdminThemeToggle';

interface Notification {
  id: number;
  title: string;
  description: string;
  time: string;
  read: boolean;
  type: 'info' | 'warning' | 'error' | 'success';
}

interface TopbarProps {
  toggleSidebar: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ toggleSidebar }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: "New Order Received",
      description: "Order #1005 has been placed for $189.99",
      time: "2 min ago",
      read: false,
      type: "info"
    },
    {
      id: 2,
      title: "Product Low Stock",
      description: "Vitamin C Serum stock is running low (5 units remaining)",
      time: "15 min ago",
      read: false,
      type: "warning"
    },
    {
      id: 3,
      title: "Payment Failed",
      description: "Payment for order #1002 has failed",
      time: "1 hour ago",
      read: true,
      type: "error"
    },
    {
      id: 4,
      title: "New Customer",
      description: "Nguyen Van A just registered to the platform",
      time: "3 hours ago",
      read: true,
      type: "info"
    },
    {
      id: 5,
      title: "Backup Completed",
      description: "Daily backup completed successfully",
      time: "5 hours ago",
      read: true,
      type: "success"
    }
  ]);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close notifications dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchTerm);
  };

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  const unreadCount = notifications.filter(n => !n.read).length;
  const notificationIconColor = unreadCount > 0 ? 'text-red-500' : 'text-[var(--admin-text-primary)]';

  return (
    <header className="bg-[var(--admin-bg-primary)] border-b border-[var(--admin-border)] px-4 py-3 flex items-center justify-between">
      <div className="flex items-center">
        {/* Mobile menu button */}
        <button 
          className="lg:hidden mr-4 text-[var(--admin-text-primary)]"
          onClick={toggleSidebar}
        >
          <Menu className="w-6 h-6" />
        </button>
        
        {/* Search bar */}
        <form onSubmit={handleSearch} className="hidden md:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64 px-4 py-2 pl-10 rounded-full border border-[var(--admin-border)] bg-[var(--admin-input-bg)] text-[var(--admin-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--admin-text-accent)]"
            />
            <div className="absolute left-3 top-2.5 text-[var(--admin-text-secondary)]">
              <Search className="w-5 h-5" />
            </div>
          </div>
        </form>
      </div>

      {/* Right side icons */}
      <div className="flex items-center space-x-4">
        {/* Admin theme toggle */}
        <AdminThemeToggle />
        
        {/* Notification dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button 
            className="relative p-1 text-[var(--admin-text-primary)] hover:bg-[var(--admin-bg-secondary)] rounded-full"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <Bell className={`w-6 h-6 ${notificationIconColor}`} />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-red-500 text-white text-xs rounded-full">
                {unreadCount}
              </span>
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-[var(--admin-bg-primary)] border border-[var(--admin-border)] rounded-lg shadow-lg z-50">
              <div className="p-4 border-b border-[var(--admin-border)] flex justify-between items-center">
                <h3 className="text-lg font-semibold text-[var(--admin-text-primary)]">Notifications</h3>
                {unreadCount > 0 && (
                  <button 
                    onClick={markAllAsRead}
                    className="text-sm text-[var(--admin-text-accent)] hover:text-[var(--admin-text-accent)]/80"
                  >
                    Mark all as read
                  </button>
                )}
              </div>
              
              <div className="max-h-96 overflow-y-auto">
                {notifications.length === 0 ? (
                  <div className="p-6 text-center text-[var(--admin-text-secondary)]">
                    No notifications
                  </div>
                ) : (
                  <ul>
                    {notifications.map((notification) => (
                      <li 
                        key={notification.id} 
                        className={`border-b border-[var(--admin-border)] last:border-b-0 p-4 hover:bg-[var(--admin-bg-secondary)] ${
                          notification.read ? 'bg-transparent' : 'bg-[var(--admin-bg-secondary)]/50'
                        }`}
                      >
                        <div className="flex items-start">
                          <div className={`mr-3 mt-1 flex-shrink-0 ${
                            notification.type === 'info' ? 'text-blue-500' :
                            notification.type === 'warning' ? 'text-yellow-500' :
                            notification.type === 'error' ? 'text-red-500' : 'text-green-500'
                          }`}>
                            {notification.type === 'info' && <Bell className="w-5 h-5" />}
                            {notification.type === 'warning' && <Bell className="w-5 h-5" />}
                            {notification.type === 'error' && <X className="w-5 h-5" />}
                            {notification.type === 'success' && <Check className="w-5 h-5" />}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between">
                              <p className={`text-sm font-medium ${
                                notification.read ? 'text-[var(--admin-text-secondary)]' : 'text-[var(--admin-text-primary)]'
                              }`}>
                                {notification.title}
                              </p>
                              <span className="text-xs text-[var(--admin-text-secondary)] whitespace-nowrap">
                                {notification.time}
                              </span>
                            </div>
                            <p className="text-sm text-[var(--admin-text-secondary)] mt-1 truncate">
                              {notification.description}
                            </p>
                          </div>
                          
                          {!notification.read && (
                            <button 
                              onClick={() => markAsRead(notification.id)}
                              className="ml-2 text-[var(--admin-text-secondary)] hover:text-[var(--admin-text-primary)] p-1"
                              title="Mark as read"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
              <div className="p-3 border-t border-[var(--admin-border)] text-center">
                <Link 
                  to="/admin/notifications" 
                  className="text-sm text-[var(--admin-text-accent)] hover:text-[var(--admin-text-accent)]/80"
                >
                  View all notifications
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* User profile */}
        <Link 
          to="/admin/account" 
          className="flex items-center space-x-2 hover:underline"
        >
          <div className="w-8 h-8 rounded-full bg-[var(--admin-bg-secondary)] flex items-center justify-center">
            <User className="w-5 h-5 text-[var(--admin-text-accent)]" />
          </div>
          <span className="hidden md:block text-[var(--admin-text-primary)]">Admin</span>
        </Link>
      </div>
    </header>
  );
};

export default Topbar;
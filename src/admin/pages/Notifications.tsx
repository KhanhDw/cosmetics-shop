import React from 'react';
import { Bell, Search, Filter, Check, X } from 'lucide-react';
import { useState } from 'react';

interface Notification {
  id: number;
  title: string;
  description: string;
  time: string;
  read: boolean;
  type: 'info' | 'warning' | 'error' | 'success';
}

const NotificationsPage: React.FC = () => {
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
    },
    {
      id: 6,
      title: "Security Alert",
      description: "Suspicious login attempt detected",
      time: "1 day ago",
      read: true,
      type: "error"
    }
  ]);

  const [filters, setFilters] = useState({
    type: 'all',
    readStatus: 'all'
  });

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  const filteredNotifications = notifications.filter(notification => {
    const typeMatch = filters.type === 'all' || notification.type === filters.type;
    const statusMatch = filters.readStatus === 'all' || 
                       (filters.readStatus === 'read' && notification.read) ||
                       (filters.readStatus === 'unread' && !notification.read);
    return typeMatch && statusMatch;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'info': return 'text-blue-500';
      case 'warning': return 'text-yellow-500';
      case 'error': return 'text-red-500';
      case 'success': return 'text-green-500';
      default: return 'text-[var(--admin-text-primary)]';
    }
  };

  const getTypeBg = (type: string) => {
    switch (type) {
      case 'info': return 'bg-blue-100';
      case 'warning': return 'bg-yellow-100';
      case 'error': return 'bg-red-100';
      case 'success': return 'bg-green-100';
      default: return 'bg-[var(--admin-bg-secondary)]';
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl font-bold text-[var(--admin-text-primary)]">Notifications</h1>
      </div>

      {/* Filters and Actions */}
      <div className="bg-[var(--admin-card-bg)] p-4 rounded-xl border border-[var(--admin-border)] mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-wrap gap-3">
            <div className="relative">
              <select
                value={filters.type}
                onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
                className="px-4 py-2 pr-8 rounded-full border border-[var(--admin-border)] bg-[var(--admin-bg-primary)] text-[var(--admin-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--admin-text-accent)] appearance-none"
              >
                <option value="all">All Types</option>
                <option value="info">Information</option>
                <option value="warning">Warning</option>
                <option value="error">Error</option>
                <option value="success">Success</option>
              </select>
              <div className="absolute right-3 top-2.5 text-[var(--admin-text-secondary)]">
                <Filter className="w-4 h-4" />
              </div>
            </div>

            <div className="relative">
              <select
                value={filters.readStatus}
                onChange={(e) => setFilters(prev => ({ ...prev, readStatus: e.target.value }))}
                className="px-4 py-2 pr-8 rounded-full border border-[var(--admin-border)] bg-[var(--admin-bg-primary)] text-[var(--admin-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--admin-text-accent)] appearance-none"
              >
                <option value="all">All Statuses</option>
                <option value="read">Read</option>
                <option value="unread">Unread</option>
              </select>
              <div className="absolute right-3 top-2.5 text-[var(--admin-text-secondary)]">
                <Filter className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {unreadCount > 0 && (
              <button 
                onClick={markAllAsRead}
                className="px-4 py-2 bg-[var(--admin-text-accent)] text-white rounded-lg hover:bg-[var(--admin-text-accent)]/90 transition-colors"
              >
                Mark all as read
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="bg-[var(--admin-card-bg)] rounded-xl border border-[var(--admin-border)] overflow-hidden">
        {filteredNotifications.length === 0 ? (
          <div className="p-8 text-center text-[var(--admin-text-secondary)]">
            <Bell className="w-12 h-12 mx-auto text-[var(--admin-text-secondary)] mb-3" />
            <p className="text-lg font-medium">No notifications</p>
            <p className="mt-1">You don't have any notifications matching your filters</p>
          </div>
        ) : (
          <ul>
            {filteredNotifications.map((notification) => (
              <li 
                key={notification.id} 
                className={`border-b border-[var(--admin-border)] last:border-b-0 p-4 hover:bg-[var(--admin-bg-secondary)] ${
                  notification.read ? 'bg-transparent' : 'bg-[var(--admin-bg-secondary)]/50'
                }`}
              >
                <div className="flex items-start">
                  <div className={`mr-3 mt-1 flex-shrink-0 ${getTypeColor(notification.type)}`}>
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
                    <p className="text-sm text-[var(--admin-text-secondary)] mt-1">
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
    </div>
  );
};

export default NotificationsPage;
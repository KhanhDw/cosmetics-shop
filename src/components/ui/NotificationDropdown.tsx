import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Bell, X } from "lucide-react";

interface Notification {
  id: number;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: "promotion" | "review" | "order" | "other";
}

interface NotificationDropdownProps {
  notifications: Notification[];
  onMarkAsRead: (id: number) => void;
  onMarkAllAsRead: () => void;
}

const NotificationDropdown: React.FC<NotificationDropdownProps> = ({
  notifications,
  onMarkAsRead,
  onMarkAllAsRead,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Count unread notifications
  const unreadCount = notifications.filter(notification => !notification.read).length;

  // Get notification icon based on type
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "promotion":
        return (
          <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        );
      case "review":
        return (
          <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
        );
      case "order":
        return (
          <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        );
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className={`p-2 rounded-full relative ${
          isOpen
            ? "bg-[var(--text-accent)]/10 text-accent"
            : "text-secondary hover:text-accent hover:bg-[var(--bg-secondary)]/50 dark:text-secondary dark:hover:text-accent"
        } transition-all duration-300`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Notifications"
      >
        <Bell className="w-6 h-6" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full transform translate-x-1 -translate-y-1">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-[var(--border)] z-50 overflow-hidden">
          <div className="p-4 border-b border-[var(--border)] dark:border-[var(--border)] flex justify-between items-center">
            <h3 className="font-bold text-[var(--text-primary)] dark:text-[var(--text-primary)]">
              {t('notifications.title')}
            </h3>
            {unreadCount > 0 && (
              <button
                onClick={onMarkAllAsRead}
                className="text-sm text-[var(--text-accent)] hover:text-[var(--text-secondary)]"
              >
                {t('notifications.mark_all_read')}
              </button>
            )}
          </div>
          
          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-6 text-center text-[var(--text-secondary)]">
                {t('notifications.no_notifications')}
              </div>
            ) : (
              <div className="divide-y divide-[var(--border)] dark:divide-[var(--border)]">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 transition-colors duration-200 ${
                      !notification.read
                        ? "bg-[var(--bg-secondary)]/30 dark:bg-[var(--bg-secondary)]/50"
                        : ""
                    }`}
                  >
                    <div className="flex">
                      <div className="flex-shrink-0 mr-3">
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-[var(--text-primary)] dark:text-[var(--text-primary)]">
                          {notification.title}
                        </h4>
                        <p className="text-sm text-[var(--text-secondary)] dark:text-[var(--text-secondary)] mt-1">
                          {notification.message}
                        </p>
                        <p className="text-xs text-[var(--text-secondary)] dark:text-[var(--text-secondary)] mt-2">
                          {notification.timestamp}
                        </p>
                      </div>
                      <button
                        onClick={() => onMarkAsRead(notification.id)}
                        className="flex-shrink-0 p-1 ml-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                        aria-label="Mark as read"
                      >
                        {!notification.read && (
                          <div className="w-2 h-2 bg-[var(--text-accent)] rounded-full"></div>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="p-3 border-t border-[var(--border)] dark:border-[var(--border)] text-center">
            <button 
              onClick={() => {
                navigate('/notifications');
                setIsOpen(false);
              }}
              className="text-sm text-[var(--text-accent)] hover:text-[var(--text-secondary)]"
            >
              {t('notifications.view_all')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
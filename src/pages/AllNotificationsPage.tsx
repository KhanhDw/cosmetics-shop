import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Bell, X, Filter, Clock, ShoppingCart, Star, Tag } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Notification {
  id: number;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: "promotion" | "review" | "order" | "system";
  priority: "low" | "medium" | "high";
}

const AllNotificationsPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [filteredNotifications, setFilteredNotifications] = useState<Notification[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [selectedPriority, setSelectedPriority] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Mock data initialization
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockNotifications: Notification[] = [
        {
          id: 1,
          title: t('notifications.promotions'),
          message: "Bạn có ưu đãi đặc biệt trong ngày hôm nay! Giảm 50% cho các sản phẩm chăm sóc da.",
          timestamp: "2023-10-15 10:30",
          read: false,
          type: "promotion",
          priority: "high"
        },
        {
          id: 2,
          title: t('notifications.product_reviews'),
          message: "Sản phẩm bạn đánh giá đã nhận được phản hồi mới từ một khách hàng khác.",
          timestamp: "2023-10-14 15:45",
          read: false,
          type: "review",
          priority: "medium"
        },
        {
          id: 3,
          title: "Cập nhật đơn hàng",
          message: "Đơn hàng #1001 đã được giao thành công. Vui lòng xác nhận nhận hàng.",
          timestamp: "2023-10-13 09:20",
          read: true,
          type: "order",
          priority: "high"
        },
        {
          id: 4,
          title: t('notifications.promotions'),
          message: "Chương trình khuyến mãi lớn sắp bắt đầu! Đăng ký nhận thông báo sớm.",
          timestamp: "2023-10-12 14:30",
          read: true,
          type: "promotion",
          priority: "medium"
        },
        {
          id: 5,
          title: "Hệ thống",
          message: "Cập nhật bảo trì hệ thống vào 02:00 sáng mai. Dự kiến mất 30 phút.",
          timestamp: "2023-10-11 20:15",
          read: true,
          type: "system",
          priority: "high"
        },
        {
          id: 6,
          title: t('notifications.product_reviews'),
          message: "Sản phẩm 'Serum Vitamin C' mà bạn yêu thích đã có đánh giá 5 sao.",
          timestamp: "2023-10-10 16:45",
          read: false,
          type: "review",
          priority: "low"
        },
        {
          id: 7,
          title: "Cập nhật đơn hàng",
          message: "Đơn hàng #1002 đang được vận chuyển. Dự kiến giao trong 2 ngày tới.",
          timestamp: "2023-10-09 11:20",
          read: true,
          type: "order",
          priority: "medium"
        },
        {
          id: 8,
          title: t('notifications.promotions'),
          message: "Ưu đãi cuối tuần: Freeship cho đơn hàng trên 500.000đ.",
          timestamp: "2023-10-08 09:00",
          read: true,
          type: "promotion",
          priority: "low"
        },
        {
          id: 9,
          title: "Hệ thống",
          message: "Tài khoản của bạn đã được cập nhật bảo mật thành công.",
          timestamp: "2023-10-07 15:30",
          read: true,
          type: "system",
          priority: "low"
        },
        {
          id: 10,
          title: t('notifications.product_reviews'),
          message: "Sản phẩm mà bạn đánh giá đã được cập nhật nội dung chi tiết.",
          timestamp: "2023-10-06 13:45",
          read: false,
          type: "review",
          priority: "medium"
        },
      ];
      setNotifications(mockNotifications);
      setFilteredNotifications(mockNotifications);
      setIsLoading(false);
    }, 500);
  }, [t]);

  // Filter notifications based on selected filters
  useEffect(() => {
    let result = notifications;
    
    // Apply type filter
    if (selectedFilter !== "all") {
      result = result.filter(notification => notification.type === selectedFilter);
    }
    
    // Apply priority filter
    if (selectedPriority !== "all") {
      result = result.filter(notification => notification.priority === selectedPriority);
    }
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(notification => 
        notification.title.toLowerCase().includes(term) || 
        notification.message.toLowerCase().includes(term)
      );
    }
    
    setFilteredNotifications(result);
  }, [selectedFilter, selectedPriority, searchTerm, notifications]);

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "promotion":
        return <Tag className="w-5 h-5 text-blue-500" />;
      case "review":
        return <Star className="w-5 h-5 text-green-500" />;
      case "order":
        return <ShoppingCart className="w-5 h-5 text-purple-500" />;
      case "system":
        return <Bell className="w-5 h-5 text-gray-500" />;
      default:
        return <Bell className="w-5 h-5 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      case "medium": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
      case "low": return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    }
  };

  // Calculate statistics
  const unreadCount = notifications.filter(n => !n.read).length;
  const promotionCount = notifications.filter(n => n.type === "promotion").length;
  const reviewCount = notifications.filter(n => n.type === "review").length;
  const orderCount = notifications.filter(n => n.type === "order").length;

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[var(--text-primary)] dark:text-[var(--text-primary)]">
              {t('notifications.title')}
            </h1>
            <p className="text-[var(--text-secondary)] dark:text-[var(--text-secondary)]">
              {t('notifications.all_notifications_subtitle', { count: notifications.length })}
            </p>
          </div>
          <button 
            onClick={() => navigate(-1)}
            className="mt-4 md:mt-0 px-4 py-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            ← {t('common.back')}
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-[var(--card-bg)] dark:bg-[var(--card-bg)] p-4 rounded-xl border border-[var(--border)] dark:border-[var(--border)]">
            <div className="flex items-center">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                <Bell className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-[var(--text-primary)] dark:text-[var(--text-primary)]">{notifications.length}</p>
                <p className="text-[var(--text-secondary)] dark:text-[var(--text-secondary)] text-sm">{t('notifications.total')}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[var(--card-bg)] dark:bg-[var(--card-bg)] p-4 rounded-xl border border-[var(--border)] dark:border-[var(--border)]">
            <div className="flex items-center">
              <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
                <div className="w-6 h-6 flex items-center justify-center">
                  <span className="text-orange-600 dark:text-orange-400 font-bold">!</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-[var(--text-primary)] dark:text-[var(--text-primary)]">{unreadCount}</p>
                <p className="text-[var(--text-secondary)] dark:text-[var(--text-secondary)] text-sm">{t('notifications.unread')}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[var(--card-bg)] dark:bg-[var(--card-bg)] p-4 rounded-xl border border-[var(--border)] dark:border-[var(--border)]">
            <div className="flex items-center">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                <Tag className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-[var(--text-primary)] dark:text-[var(--text-primary)]">{promotionCount}</p>
                <p className="text-[var(--text-secondary)] dark:text-[var(--text-secondary)] text-sm">{t('notifications.promotions')}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[var(--card-bg)] dark:bg-[var(--card-bg)] p-4 rounded-xl border border-[var(--border)] dark:border-[var(--border)]">
            <div className="flex items-center">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                <Star className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-[var(--text-primary)] dark:text-[var(--text-primary)]">{reviewCount}</p>
                <p className="text-[var(--text-secondary)] dark:text-[var(--text-secondary)] text-sm">{t('notifications.product_reviews')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-[var(--card-bg)] dark:bg-[var(--card-bg)] p-4 rounded-xl border border-[var(--border)] dark:border-[var(--border)] mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedFilter("all")}
                className={`px-3 py-1.5 rounded-full text-sm ${
                  selectedFilter === "all"
                    ? "bg-[var(--text-accent)] text-white"
                    : "bg-[var(--bg-secondary)] dark:bg-[var(--bg-secondary)] text-[var(--text-primary)] dark:text-[var(--text-primary)]"
                }`}
              >
                {t('common.all')}
              </button>
              <button
                onClick={() => setSelectedFilter("promotion")}
                className={`px-3 py-1.5 rounded-full text-sm flex items-center ${
                  selectedFilter === "promotion"
                    ? "bg-blue-500 text-white"
                    : "bg-[var(--bg-secondary)] dark:bg-[var(--bg-secondary)] text-[var(--text-primary)] dark:text-[var(--text-primary)]"
                }`}
              >
                <Tag className="w-4 h-4 mr-1" /> {t('notifications.promotions')}
              </button>
              <button
                onClick={() => setSelectedFilter("review")}
                className={`px-3 py-1.5 rounded-full text-sm flex items-center ${
                  selectedFilter === "review"
                    ? "bg-green-500 text-white"
                    : "bg-[var(--bg-secondary)] dark:bg-[var(--bg-secondary)] text-[var(--text-primary)] dark:text-[var(--text-primary)]"
                }`}
              >
                <Star className="w-4 h-4 mr-1" /> {t('notifications.product_reviews')}
              </button>
              <button
                onClick={() => setSelectedFilter("order")}
                className={`px-3 py-1.5 rounded-full text-sm flex items-center ${
                  selectedFilter === "order"
                    ? "bg-purple-500 text-white"
                    : "bg-[var(--bg-secondary)] dark:bg-[var(--bg-secondary)] text-[var(--text-primary)] dark:text-[var(--text-primary)]"
                }`}
              >
                <ShoppingCart className="w-4 h-4 mr-1" /> {t('notifications.orders')}
              </button>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder={t('notifications.search_placeholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full md:w-64 px-4 py-2 pl-10 rounded-full border border-[var(--border)] dark:border-[var(--border)] bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)] text-[var(--text-primary)] dark:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
                />
                <div className="absolute left-3 top-2.5 text-[var(--text-secondary)] dark:text-[var(--text-secondary)]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              
              <div className="flex gap-2">
                <select
                  value={selectedPriority}
                  onChange={(e) => setSelectedPriority(e.target.value)}
                  className="px-3 py-2 rounded-full border border-[var(--border)] dark:border-[var(--border)] bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)] text-[var(--text-primary)] dark:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]"
                >
                  <option value="all">{t('notifications.all_priority')}</option>
                  <option value="high">{t('notifications.high_priority')}</option>
                  <option value="medium">{t('notifications.medium_priority')}</option>
                  <option value="low">{t('notifications.low_priority')}</option>
                </select>
                
                {unreadCount > 0 && (
                  <button
                    onClick={markAllAsRead}
                    className="px-3 py-2 rounded-full bg-[var(--text-accent)] text-white hover:bg-[var(--text-secondary)] transition-colors"
                  >
                    {t('notifications.mark_all_read')}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--text-accent)]"></div>
            </div>
          ) : filteredNotifications.length > 0 ? (
            filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  notification.read
                    ? "border-[var(--border)] dark:border-[var(--border)] bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)]"
                    : "border-[var(--text-accent)] dark:border-[var(--text-accent)] bg-[var(--bg-secondary)]/30 dark:bg-[var(--bg-secondary)]/30"
                }`}
              >
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="p-2 rounded-full bg-[var(--bg-secondary)]/50 dark:bg-[var(--bg-secondary)]/50">
                      {getNotificationIcon(notification.type)}
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className={`font-semibold ${
                            notification.read 
                              ? "text-[var(--text-primary)] dark:text-[var(--text-primary)]" 
                              : "text-[var(--text-accent)]"
                          }`}>
                            {notification.title}
                          </h3>
                          {!notification.read && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[var(--text-accent)] text-white">
                              {t('notifications.unread_badge')}
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-[var(--text-secondary)] dark:text-[var(--text-secondary)]">
                          {notification.message}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(notification.priority)}`}>
                          {t(`notifications.${notification.priority}_priority`)}
                        </span>
                        <span className="text-xs text-[var(--text-secondary)] dark:text-[var(--text-secondary)] flex items-center">
                          <Clock className="w-3 h-3 mr-1" /> {notification.timestamp}
                        </span>
                        <button
                          onClick={() => deleteNotification(notification.id)}
                          className="ml-2 text-[var(--text-secondary)] hover:text-red-500"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex justify-end mt-3 space-x-2">
                      {!notification.read && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="px-3 py-1 text-sm rounded-full bg-[var(--text-accent)]/10 text-[var(--text-accent)] hover:bg-[var(--text-accent)]/20"
                        >
                          {t('notifications.mark_read')}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <div className="mx-auto w-24 h-24 rounded-full bg-[var(--bg-secondary)]/50 flex items-center justify-center">
                <Bell className="w-12 h-12 text-[var(--text-secondary)]" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-[var(--text-primary)] dark:text-[var(--text-primary)]">
                {t('notifications.no_notifications_title')}
              </h3>
              <p className="mt-1 text-[var(--text-secondary)] dark:text-[var(--text-secondary)]">
                {t('notifications.no_notifications_subtitle')}
              </p>
            </div>
          )}
        </div>
        
        {/* Pagination - Simplified for mock data */}
        {filteredNotifications.length > 0 && (
          <div className="mt-8 flex justify-center">
            <div className="flex space-x-2">
              <button className="px-4 py-2 rounded-lg border border-[var(--border)] dark:border-[var(--border)] text-[var(--text-primary)] dark:text-[var(--text-primary)]">
                {t('common.previous')}
              </button>
              <button className="px-4 py-2 rounded-lg bg-[var(--text-accent)] text-white">
                1
              </button>
              <button className="px-4 py-2 rounded-lg border border-[var(--border)] dark:border-[var(--border)] text-[var(--text-primary)] dark:text-[var(--text-primary)]">
                2
              </button>
              <button className="px-4 py-2 rounded-lg border border-[var(--border)] dark:border-[var(--border)] text-[var(--text-primary)] dark:text-[var(--text-primary)]">
                3
              </button>
              <button className="px-4 py-2 rounded-lg border border-[var(--border)] dark:border-[var(--border)] text-[var(--text-primary)] dark:text-[var(--text-primary)]">
                {t('common.next')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllNotificationsPage;
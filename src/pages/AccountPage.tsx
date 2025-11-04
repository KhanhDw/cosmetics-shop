import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { getRandomCosmeticImageUrl } from "@/utils/imageService";

const AccountPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("profile");
  const [userData, setUserData] = useState({
    name: "Người dùng",
    email: "user@example.com",
    phone: "+84 123 456 789",
    dob: "01/01/1990",
  });

  const [editing, setEditing] = useState(false);
  const [passwordData, setPasswordData] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  // Sidebar menu items with icons - Icons will be SVGs in the component
  const menuItems = [
    { id: "profile", label: t('account.profile') },
    { id: "orders", label: t('account.my_orders') },
    { id: "addresses", label: t('account.addresses') },
    { id: "wishlist", label: t('account.wishlist') },
    { id: "password", label: t('account.change_password') },
  ];

  // Handle logout
  const { logout } = useAuth();
  const handleLogout = () => {
    logout(); // Clear the authentication state
    navigate("/"); // Optionally redirect to home after logout
  };

  // Save profile changes
  const saveProfile = () => {
    setEditing(false);
    // Here you would typically send data to backend
  };

  // Save password changes
  const savePassword = () => {
    // Here you would typically send data to backend
    setPasswordData({ current: "", new: "", confirm: "" });
  };

  // Sample orders data
  const orders = [
    {
      id: "#1001",
      date: "2023-10-15",
      status: t('common.shipped'),
      total: "1,200,000₫",
    },
    { id: "#1002", date: "2023-09-22", status: t('common.delivered'), total: "850,000₫" },
    { id: "#1003", date: "2023-08-30", status: t('common.cancelled'), total: "420,000₫" },
  ];

  // Sample addresses data
  const addresses = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      phone: "+84 123 456 789",
      address: "123 Đường ABC, Quận XYZ, TP. HCM",
    },
    {
      id: 2,
      name: "Nguyễn Văn A",
      phone: "+84 987 654 321",
      address: "456 Đường DEF, Quận UVW, TP. Hà Nội",
    },
  ];

  // Sample wishlist data
  const wishlist = [
    {
      id: 1,
      name: "Serum Vitamin C",
      brand: "The Ordinary",
      price: "380,000₫",
      image: getRandomCosmeticImageUrl(100, 100),
    },
    {
      id: 2,
      name: "Kem dưỡng ẩm",
      brand: "CeraVe",
      price: "450,000₫",
      image: getRandomCosmeticImageUrl(100, 100),
    },
  ];

  // Profile section component
  const ProfileSection = () => (
    <div className="space-y-6 animate-fadeIn w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">
          {t('account.profile')}
        </h2>
        <button
          onClick={() => (editing ? saveProfile() : setEditing(true))}
          className="bg-gradient-to-r from-[var(--text-accent)] to-[var(--text-secondary)] hover:from-[var(--text-accent)] hover:to-[var(--text-secondary)] text-white px-4 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          {editing ? t('account.save_changes') : t('account.edit')}
        </button>
      </div>

      <div className="flex items-center mb-6">
        <div className="p-1 mr-4 rounded-full bg-gradient-to-br from-[var(--text-accent)] to-[var(--text-secondary)]">
          <div className="w-24 h-24 bg-gray-200 border-2 border-dashed rounded-full" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[var(--text-primary)]">
            {userData.name}
          </h3>
          <p className="text-[var(--text-secondary)]">
            {t('account.member_since', { month: 10, year: 2023 })}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="block mb-1 text-[var(--text-secondary)]">
            {t('common.first_name')}
          </label>
          {editing ? (
            <input
              type="text"
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
              className="w-full px-4 py-3 transition-all duration-300 border border-[var(--border)] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)] bg-[var(--card-bg)] text-[var(--text-primary)]"
            />
          ) : (
            <p className="px-4 py-3 text-[var(--text-primary)] bg-[var(--bg-secondary)] rounded-2xl">
              {userData.name}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-[var(--text-secondary)]">
            {t('common.email')}
          </label>
          {editing ? (
            <input
              type="email"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              className="w-full px-4 py-3 transition-all duration-300 border border-[var(--border)] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)] bg-[var(--card-bg)] text-[var(--text-primary)]"
            />
          ) : (
            <p className="px-4 py-3 text-[var(--text-primary)] bg-[var(--bg-secondary)] rounded-2xl">
              {userData.email}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-[var(--text-secondary)]">
            {t('common.phone')}
          </label>
          {editing ? (
            <input
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData({ ...userData, phone: e.target.value })
              }
              className="w-full px-4 py-3 transition-all duration-300 border border-[var(--border)] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)] bg-[var(--card-bg)] text-[var(--text-primary)]"
            />
          ) : (
            <p className="px-4 py-3 text-[var(--text-primary)] bg-[var(--bg-secondary)] rounded-2xl">
              {userData.phone}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-[var(--text-secondary)]">
            {t('account.date_of_birth')}
          </label>
          {editing ? (
            <input
              type="date"
              value={userData.dob}
              onChange={(e) =>
                setUserData({ ...userData, dob: e.target.value })
              }
              className="w-full px-4 py-3 transition-all duration-300 border border-[var(--border)] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)] bg-[var(--card-bg)] text-[var(--text-primary)]"
            />
          ) : (
            <p className="px-4 py-3 text-[var(--text-primary)] bg-[var(--bg-secondary)] rounded-2xl">
              {userData.dob}
            </p>
          )}
        </div>
      </div>
    </div>
  );

  // Orders section component
  const OrdersSection = () => (
    <div className="animate-fadeIn">
      <h2 className="mb-6 text-2xl font-bold text-[var(--text-primary)]">
        {t('account.my_orders')}
      </h2>
      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="p-5 transition-all duration-300 bg-[var(--card-bg)] border border-[var(--border)] shadow-sm rounded-2xl hover:shadow-md"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  {t('account.order_number', { number: order.id })}
                </h3>
                <p className="text-[var(--text-secondary)]">
                  {t('account.order_date', { date: order.date })}
                </p>
              </div>
              <div className="flex flex-col items-start mt-2 md:items-end md:mt-0">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    order.status === "Đã giao" || order.status === "Đang giao" || order.status === "Đã hủy"
                      ? order.status === "Đã giao" 
                        ? "bg-green-100 text-green-800" 
                        : order.status === "Đang giao" 
                          ? "bg-blue-100 text-blue-800" 
                          : "bg-red-100 text-red-800"
                      : order.status === t('common.delivered') 
                        ? "bg-green-100 text-green-800"
                        : order.status === t('common.shipped')
                          ? "bg-blue-100 text-blue-800"
                          : "bg-red-100 text-red-800"
                  }`}
                >
                  {order.status === "Đã giao" ? t('common.delivered') : 
                   order.status === "Đang giao" ? t('common.shipped') : 
                   order.status === "Đã hủy" ? t('common.cancelled') :
                   order.status}
                </span>
                <p className="mt-2 font-semibold text-[var(--text-primary)]">
                  {t('common.total')}: {order.total}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Addresses section component
  const AddressesSection = () => (
    <div className="animate-fadeIn">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">
          {t('account.shipping_address')}
        </h2>
        <button className="bg-gradient-to-r from-[var(--text-accent)] to-[var(--text-secondary)] hover:from-[var(--text-accent)] hover:to-[var(--text-secondary)] text-white px-4 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
          {t('account.add_new_address')}
        </button>
      </div>

      <div className="space-y-4">
        {addresses.map((address) => (
          <div
            key={address.id}
            className="p-5 transition-all duration-300 bg-[var(--card-bg)] border border-[var(--border)] shadow-sm rounded-2xl hover:shadow-md"
          >
            <div className="flex justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  {address.name}
                </h3>
                <p className="text-[var(--text-secondary)]">{address.phone}</p>
                <p className="mt-2 text-[var(--text-primary)]">
                  {address.address}
                </p>
              </div>
              <div className="flex space-x-3">
                <button className="px-3 py-1 text-[var(--text-accent)] transition-colors bg-[color:var(--card-bg)]/50 rounded-lg hover:bg-[color:var(--card-bg)]/70 rounded-2xl">
                  {t('common.edit')}
                </button>
                <button className="px-3 py-1 text-red-600 transition-colors bg-red-100 rounded-lg hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-800/50 dark:text-red-300 rounded-2xl">
                  {t('common.delete')}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Wishlist section component
  const WishlistSection = () => (
    <div className="animate-fadeIn">
      <h2 className="mb-6 text-2xl font-bold text-[var(--text-primary)]">
        {t('account.wishlist')}
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="p-5 transition-all duration-300 bg-[var(--card-bg)] border border-[var(--border)] shadow-sm rounded-2xl hover:shadow-md"
          >
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.name}
                className="object-contain w-16 h-16 rounded-xl"
              />
              <div className="flex-1 ml-4">
                <h3 className="font-semibold text-[var(--text-primary)]">
                  {item.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {item.brand}
                </p>
                <p className="mt-1 font-bold text-[var(--text-accent)]">
                  {item.price}
                </p>
              </div>
              <button className="text-red-500 hover:text-red-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Password section component
  const PasswordSection = () => (
    <div className="animate-fadeIn">
      <h2 className="mb-6 text-2xl font-bold text-[var(--text-primary)]">
        {t('account.change_password')}
      </h2>
      <div className="max-w-md">
        <div className="mb-4">
          <label className="block mb-1 text-[var(--text-secondary)]">
            {t('account.current_password')}
          </label>
          <input
            type="password"
            value={passwordData.current}
            onChange={(e) =>
              setPasswordData({ ...passwordData, current: e.target.value })
            }
            className="w-full px-4 py-3 transition-all duration-300 border border-[var(--border)] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)] bg-[var(--card-bg)] text-[var(--text-primary)]"
            placeholder={t('account.current_password_placeholder')}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-[var(--text-secondary)]">
            {t('account.new_password')}
          </label>
          <input
            type="password"
            value={passwordData.new}
            onChange={(e) =>
              setPasswordData({ ...passwordData, new: e.target.value })
            }
            className="w-full px-4 py-3 transition-all duration-300 border border-[var(--border)] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)] bg-[var(--card-bg)] text-[var(--text-primary)]"
            placeholder={t('account.new_password_placeholder')}
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-[var(--text-secondary)]">
            {t('account.confirm_new_password')}
          </label>
          <input
            type="password"
            value={passwordData.confirm}
            onChange={(e) =>
              setPasswordData({ ...passwordData, confirm: e.target.value })
            }
            className="w-full px-4 py-3 transition-all duration-300 border border-[var(--border)] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)] bg-[var(--card-bg)] text-[var(--text-primary)]"
            placeholder={t('account.confirm_new_password_placeholder')}
          />
        </div>

        <button
          onClick={savePassword}
          className="bg-gradient-to-r from-[var(--text-accent)] to-[var(--text-secondary)] hover:from-[var(--text-accent)] hover:to-[var(--text-secondary)] text-white px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          {t('account.save_changes')}
        </button>
      </div>
    </div>
  );

  return (
    <div className=" max-w-7xl my-10 min-h-screen mx-auto transition-colors duration-300">
      <div className="max-w-full mx-auto">
        {/* Account Header */}
        <div className="flex flex-col p-6 mb-6 transition-all duration-300 shadow-lg bg-[var(--card-bg)]/80 backdrop-blur-sm rounded-3xl md:flex-row md:items-center md:justify-between">
          <div className="flex items-center mb-4 space-x-4 md:mb-0">
            <div className="p-1 mr-4 rounded-full bg-gradient-to-br from-[var(--text-accent)] to-[var(--text-secondary)]">
              <div className="w-16 h-16 bg-gray-200 border-2 border-dashed rounded-full" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[var(--text-primary)]">
                {t('account.greeting', { name: userData.name })}, 
              </h1>
              <p className="text-[var(--text-secondary)]">
                {t('account.manage_account')}
              </p>
            </div>
          </div>
          <div className="flex space-x-3"></div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-6 md:flex-row mx-4 md:mx-8">
          {/* Sidebar */}
          <div className="w-full p-4 transition-all duration-300 shadow-lg md:w-64 bg-[color:var(--card-bg)]/80 backdrop-blur-sm rounded-3xl">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-2xl transition-all duration-300 flex items-center space-x-3 ${
                      activeSection === item.id
                        ? "bg-gradient-to-r from-[var(--text-accent)] to-[var(--text-secondary)] text-white shadow-md"
                        : "hover:bg-[color:var(--card-bg)]/50"
                    }`}
                  >
                    <span className="text-lg">
                      {item.id === "profile" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      )}
                      {item.id === "orders" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                          />
                        </svg>
                      )}
                      {item.id === "addresses" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      )}
                      {item.id === "wishlist" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      )}
                      {item.id === "password" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                      )}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-3 space-x-3 text-left text-red-500 transition-all duration-300 rounded-2xl hover:bg-red-50/50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  <span className="font-medium">{t('common.logout')}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-6 transition-all duration-300 transform shadow-lg bg-[color:var(--card-bg)]/80 backdrop-blur-sm rounded-3xl">
            <div className="min-h-[500px] opacity-100 transition-opacity duration-300">
              {activeSection === "profile" && <ProfileSection />}
              {activeSection === "orders" && <OrdersSection />}
              {activeSection === "addresses" && <AddressesSection />}
              {activeSection === "wishlist" && <WishlistSection />}
              {activeSection === "password" && <PasswordSection />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  User,
  Percent,
  BarChart3,
  Settings,
  Tag,
  X,
  Bell,
} from "lucide-react";

const Sidebar: React.FC<{ isOpen: boolean; toggleSidebar: () => void }> = ({
  isOpen,
  toggleSidebar,
}) => {
  const location = useLocation();

  const navItems = [
    { to: "/admin", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/admin/products", icon: Package, label: "Products" },
    { to: "/admin/categories-brands", icon: Tag, label: "Categories & Brands" },
    { to: "/admin/orders", icon: ShoppingCart, label: "Orders" },
    { to: "/admin/customers", icon: Users, label: "Customers" },
    { to: "/admin/staff", icon: User, label: "Staff" },
    { to: "/admin/promotions", icon: Percent, label: "Promotions" },
    { to: "/admin/reports", icon: BarChart3, label: "Reports & Statistics" },
    { to: "/admin/notifications", icon: Bell, label: "Notifications" },
    { to: "/admin/config", icon: Settings, label: "System Configuration" },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <div
        className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-[var(--admin-bg-primary)] border-r border-[var(--admin-border)] transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-[var(--admin-border)]">
            <div className="flex items-center space-x-2">
              <div className="bg-[var(--admin-text-accent)] w-8 h-8 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">C</span>
              </div>
              <span className="text-xl font-bold text-[var(--admin-text-primary)]">
                Cosmetics Admin
              </span>
            </div>
            {isOpen && (
              <button
                className="lg:hidden text-[var(--admin-text-secondary)] p-2 touch-target"
                onClick={toggleSidebar}
              >
                <X className="w-6 h-6" />
              </button>
            )}
          </div>

          <nav className="flex-1 px-2 py-4 overflow-y-auto">
            <ul className="space-y-1 w-full">
              {navItems.map((item) => (
                <li
                  key={item.to}
                  className="w-full flex"
                >
                  <Link
                    to={item.to}
                    className={`w-full px-4 py-3 rounded-lg transition-colors touch-target ${
                      location.pathname === item.to
                        ? "bg-[var(--admin-text-accent)]/20  text-white"
                        : "text-[var(--admin-text-primary)] hover:bg-[var(--admin-bg-secondary)]"
                    }`}
                  >
                    <span className="w-full items-center flex grow">
                      <item.icon className="w-5 h-5 mr-3" />
                      <span>{item.label}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* User profile section with account settings link */}
          <div className="p-4 border-t border-[var(--admin-border)]">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[var(--admin-bg-secondary)] flex items-center justify-center">
                <User className="w-5 h-5 text-[var(--admin-text-accent)]" />
              </div>
              <div className="flex-1">
                <Link
                  to="/admin/account"
                  className="block text-sm font-medium text-[var(--admin-text-primary)] hover:underline"
                >
                  Admin User
                </Link>
                <p className="text-xs text-[var(--admin-text-secondary)]">
                  admin@example.com
                </p>
              </div>
            </div>
            <Link
              to="/admin/account"
              className="block mt-3 px-3 py-2 text-sm text-[var(--admin-text-secondary)] hover:bg-[var(--admin-bg-secondary)] rounded-lg transition-colors"
            >
              Account Settings
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

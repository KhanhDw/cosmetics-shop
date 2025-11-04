import React from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation, useParams } from 'react-router-dom';
import { AdminThemeProvider } from './contexts/AdminThemeContext';
import AdminLayout from './components/AdminLayout';
import Dashboard from './pages/Dashboard';
import ProductList from './pages/ProductList';
import ProductForm from './pages/ProductForm';
import CategoriesBrands from './pages/CategoriesBrands';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import Staff from './pages/Staff';
import Promotions from './pages/Promotions';
import Reports from './pages/Reports';
import SystemConfig from './pages/SystemConfig';
import AccountConfig from './pages/AccountConfig';
import NotificationsPage from './pages/Notifications';

const AdminApp: React.FC = () => {
  return (
    <AdminThemeProvider>
      <AdminLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/new" element={<ProductForm />} />
          <Route path="/products/:id" element={<ProductForm />} />
          <Route path="/categories-brands" element={<CategoriesBrands />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/config" element={<SystemConfig />} />
          <Route path="/account" element={<AccountConfig />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AdminLayout>
    </AdminThemeProvider>
  );
};

export default AdminApp;
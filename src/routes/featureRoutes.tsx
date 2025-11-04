import { RouteObject } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import AccountLayout from '@/components/layout/AccountLayout';

// Import product pages/components
import Products from '@/pages/Products';
import ProductDetail from '@/pages/ProductDetail';
import Categories from '@/pages/Categories';
import CategoryDetailPage from '@/components/feature/product/CategoryDetailPage';

// Import account pages
import AccountPage from '@/pages/AccountPage';
import OrderDetailPage from '@/pages/OrderDetailPage';

// Product routes
export const productRoutes: RouteObject[] = [
  {
    path: '/products',
    element: (
      <MainLayout>
        <Products />
      </MainLayout>
    ),
  },
  {
    path: '/product/:id',
    element: (
      <MainLayout>
        <ProductDetail />
      </MainLayout>
    ),
  },
  {
    path: '/categories',
    element: (
      <MainLayout>
        <Categories />
      </MainLayout>
    ),
  },
  {
    path: '/category/:id',
    element: (
      <MainLayout>
        <CategoryDetailPage />
      </MainLayout>
    ),
  },
];

// Account routes
export const accountRoutes: RouteObject[] = [
  {
    path: '/account',
    element: <AccountLayout />,
    children: [
      {
        index: true,
        element: <AccountPage />,
      },
      {
        path: 'orders/:orderId',
        element: <OrderDetailPage />,
      },
    ],
  },
];
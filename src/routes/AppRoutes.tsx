import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "@/components/common/ScrollToTop";

// Lazy load page components
const Home = lazy(() => import("@/pages/Home"));
const Products = lazy(() => import("@/pages/Products"));
const Categories = lazy(() => import("@/pages/Categories"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const ProductDetail = lazy(() => import("@/pages/ProductDetail"));
const Blogs = lazy(() => import("@/pages/Blogs"));
const BlogDetail = lazy(() => import("@/pages/BlogDetail"));
const WishlistPage = lazy(() => import("@/pages/WishlistPage"));
const AccountPage = lazy(() => import("@/pages/AccountPage"));
const AllNotificationsPage = lazy(() => import("@/pages/AllNotificationsPage"));
const CartPage = lazy(() => import("@/pages/CartPage"));
const PaymentPage = lazy(() => import("@/pages/PaymentPage"));
const OrderConfirmationPage = lazy(() => import("@/pages/OrderConfirmationPage"));
const OrderFailurePage = lazy(() => import("@/pages/OrderFailurePage"));
const OrderDetailPage = lazy(() => import("@/pages/OrderDetailPage"));
const SupportPage = lazy(() => import("@/pages/SupportPage"));
const PromotionsPage = lazy(() => import("@/pages/PromotionsPage"));

// Import auth components
const LoginPage = lazy(() => import("@/components/feature/auth/LoginPage"));
const RegisterPage = lazy(() => import("@/components/feature/auth/RegisterPage"));

// Import admin components
const AdminApp = lazy(() => import("@/admin/AdminApp"));

// Import layout components
import MainLayout from "@/components/layout/MainLayout";
import AccountLayout from "@/components/layout/AccountLayout";
import CheckoutLayout from "@/components/layout/CheckoutLayout";

// Import product feature components
const CategoryDetailPage = lazy(() => import("@/components/feature/product/CategoryDetailPage"));

// Loading component for suspense
const PageLoader = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-pink-500"></div>
  </div>
);

// Create routes using the React Router v6/v7 approach with nested routes for account
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Home />
        </Suspense>
      </MainLayout>
    ),
  },
  {
    path: "/products",
    element: (
      <MainLayout>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Products />
        </Suspense>
      </MainLayout>
    ),
  },
  {
    path: "/product/:id",
    element: (
      <MainLayout>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <ProductDetail />
        </Suspense>
      </MainLayout>
    ),
  },
  {
    path: "/categories",
    element: (
      <MainLayout>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Categories />
        </Suspense>
      </MainLayout>
    ),
  },
  {
    path: "/category/:id",
    element: (
      <MainLayout>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <CategoryDetailPage />
        </Suspense>
      </MainLayout>
    ),
  },
  {
    path: "/about",
    element: (
      <MainLayout>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <About />
        </Suspense>
      </MainLayout>
    ),
  },
  {
    path: "/contact",
    element: (
      <MainLayout>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Contact />
        </Suspense>
      </MainLayout>
    ),
  },
  {
    path: "/blogs",
    element: (
      <MainLayout>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Blogs />
        </Suspense>
      </MainLayout>
    ),
  },
  {
    path: "/blog/:id",
    element: (
      <MainLayout>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <BlogDetail />
        </Suspense>
      </MainLayout>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <LoginPage />
        </Suspense>
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <RegisterPage />
        </Suspense>
      </>
    ),
  },
  {
    path: "/wishlist",
    element: (
      <MainLayout>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <WishlistPage />
        </Suspense>
      </MainLayout>
    ),
  },
  {
    path: "/notifications",
    element: (
      <MainLayout>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <AllNotificationsPage />
        </Suspense>
      </MainLayout>
    ),
  },
  {
    path: "/cart",
    element: (
      <MainLayout>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <CartPage />
        </Suspense>
      </MainLayout>
    ),
  },
  {
    path: "/payment",
    element: (
      <CheckoutLayout>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <PaymentPage />
        </Suspense>
      </CheckoutLayout>
    ),
  },
  {
    path: "/order-success",
    element: (
      <CheckoutLayout>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <OrderConfirmationPage />
        </Suspense>
      </CheckoutLayout>
    ),
  },
  {
    path: "/order-failure",
    element: (
      <CheckoutLayout>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <OrderFailurePage />
        </Suspense>
      </CheckoutLayout>
    ),
  },
  {
    path: "/support",
    element: (
      <MainLayout>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <SupportPage />
        </Suspense>
      </MainLayout>
    ),
  },
  {
    path: "/promotions",
    element: (
      <MainLayout>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <PromotionsPage />
        </Suspense>
      </MainLayout>
    ),
  },
  {
    path: "/account",
    element: (
      <>
        <ScrollToTop />
        <AccountLayout />
      </>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <AccountPage />
          </Suspense>
        ),
      },
      {
        path: "orders/:orderId",
        element: (
          <Suspense fallback={<PageLoader />}>
            <OrderDetailPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/admin/*",
    element: (
      <>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <AdminApp />
        </Suspense>
      </>
    ),
  },
  {
    path: "*",
    element: (
      <MainLayout>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <NotFound />
        </Suspense>
      </MainLayout>
    ),
  },
]);

export default router;
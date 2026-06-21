// import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from './pages/login'
import SignupPage from './pages/signup'
import ActivationPage from './pages/activation'
import ProductsPage from './pages/ProductsPages'
import BestSellingPage from './pages/BestSellingPage'
import EventsPage from './pages/EventsPage'
import FAQsPage from './pages/FAQsPage'
import Home from './pages/home'
import ProductDetailPage from './pages/productdetailpage'
import ProfilePage from './pages/ProfilePage'
import ProtectedRoute from './protectedRoute';
import CheckoutPage from './pages/CheckoutPage'
import PaymentPage from './pages/PaymentPage'
import OrderSuccessPage from "./pages/OrderSuccessPage"
import OrderDetailsPage from './pages/OrderDetailsPage'
import CreateShopPage from './pages/CreateShopPage'
import SellerActivationPage from './pages/SellerActivationPage'
import ShopLoginPage from './pages/ShopLoginPage'
import TrackOrderPage from './pages/TrackOrderPage'
import UserInbox from './pages/UserInbox'
import ShopHomePage from "./pages/Shop/ShopHomePage";
import ShopDashboardPage from './pages/Shop/ShopDashboardPage'
import ShopCreateProduct from './pages/Shop/ShopCreateProduct'
import ShopAllProducts from './pages/Shop/ShopAllProducts'
import ShopCreateEvent from './pages/Shop/ShopCreateEvent'
import ShopAllEvents from './pages/Shop/ShopAllEvents'
import ShopAllCoupounCodes from './pages/Shop/ShopAllCoupounCodes'
import ShopAllOrders from './pages/Shop/ShopAllOrders'
import ShopOrderDetail from './pages/Shop/ShopOrderDetail'
import ShopAllRefunds from './pages/Shop/ShopAllRefunds'
import ShopSettingsPage from './pages/Shop/ShopSettingsPage'
import ShopWithDrawMoneyPage from './pages/Shop/ShopWithDrawMoneyPage'
import ShopInboxPage from './pages/Shop/ShopInboxPage'
import { useEffect } from 'react';
// import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { loadUser, loadSeller } from './redux/action/user';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from 'axios';
import { server } from './server';
import { useState } from 'react';
import SellerProtectedRoute from './sellerProtectedRoute';
import { getAllProducts } from './redux/actions/product';
import { getAllEvents } from './redux/actions/event';

// import user from '../../backend/model/user.js';
export default function App() {
  const [stripeApikey, setStripeApiKey] = useState("");

  async function getStripeApikey() {
    const { data } = await axios.get(`${server}/payment/stripeapikey`);
    setStripeApiKey(data.stripeApikey);
  }
   const dispatch = useDispatch();
   useEffect(() => {
       dispatch(loadUser());
       getStripeApikey();
       dispatch(loadSeller());
       dispatch(getAllProducts());
       dispatch(getAllEvents())
   }, [dispatch])

  

  return (
    <>
      <BrowserRouter>
       {stripeApikey && (
        <Elements stripe={loadStripe(stripeApikey)}>
          <Routes>
            <Route
              path="/payment"
              element={
                <ProtectedRoute>
                  <PaymentPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Elements>
      )}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/log-in' element={<LoginPage />} />
          <Route path='/sign-up' element={<SignupPage />} />
          <Route path='/activation/:activation_token' element={<ActivationPage />} />
          <Route path='/products' element={<ProductsPage />}/>
          <Route path='/best-selling' element={<BestSellingPage />}/>
          <Route path='/events' element={<EventsPage />}/>
          <Route path='/faq' element={<FAQsPage />}/>
          <Route path='/product/:id' element={<ProductDetailPage />}/>
          <Route path='/profile' element={
            <ProtectedRoute >
              <ProfilePage />
            </ProtectedRoute>
          }/>
           <Route
          path="/user/order/:id"
          element={
            <ProtectedRoute>
              <OrderDetailsPage />
            </ProtectedRoute>
          }
        />
          <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          }
          />
           <Route
          path="/user/track/order/:id"
          element={
            <ProtectedRoute>
              <TrackOrderPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/inbox"
          element={
            <ProtectedRoute>
              <UserInbox />
            </ProtectedRoute>
          }
        />
          <Route path="/order/success" element={<OrderSuccessPage />} />
          {/* shop routes */}
          <Route path="/create-shop" element={<CreateShopPage />} />
          <Route path='/seller/activation/:activation_token' element={<SellerActivationPage />} />
          <Route path='/shop-login' element={<ShopLoginPage />} />
          <Route
          path="/shop/preview/:id"
          element={
            <SellerProtectedRoute >
              <ShopHomePage />
            </SellerProtectedRoute>
          }
          />
          <Route
          path="/dashboard"
          element={
            <SellerProtectedRoute >
              <ShopDashboardPage />
            </SellerProtectedRoute>
          }
        />
        <Route path='/dashboard-create-product'
         element={
            <SellerProtectedRoute >
              <ShopCreateProduct />
            </SellerProtectedRoute>
          }
        />
        <Route path='/dashboard-products'
          element={
            <SellerProtectedRoute >
              <ShopAllProducts />
            </SellerProtectedRoute>
          }
        />
        <Route path='/dashboard-create-event'
          element={
            <SellerProtectedRoute >
              <ShopCreateEvent />
            </SellerProtectedRoute>
          }
        />
        <Route path='/dashboard-events'
          element={
            <SellerProtectedRoute >
              <ShopAllEvents />
            </SellerProtectedRoute>
          }
        />
        <Route path='/dashboard-coupouns'
         element={
            <SellerProtectedRoute >
              <ShopAllCoupounCodes />
            </SellerProtectedRoute>
          }
        />
        <Route path='/dashboard-orders'
        element={
            <SellerProtectedRoute >
              <ShopAllOrders />
            </SellerProtectedRoute>
          }
        />
        <Route path='/order/:id'
        element={
            <SellerProtectedRoute >
              <ShopOrderDetail />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-refunds"
          element={
            <SellerProtectedRoute>
              <ShopAllRefunds />
            </SellerProtectedRoute>
          }
        />
         <Route
          path="/settings"
          element={
            <SellerProtectedRoute>
              <ShopSettingsPage />
            </SellerProtectedRoute>
          }
        />
          <Route
          path="/dashboard-withdraw-money"
          element={
            <SellerProtectedRoute>
              <ShopWithDrawMoneyPage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-messages"
          element={
            <SellerProtectedRoute>
              <ShopInboxPage />
            </SellerProtectedRoute>
          }
        />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="bottom-center" />
    </>
  )
}

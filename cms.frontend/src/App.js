import React from 'react';
// Import các thành phần lõi của thư viện điều hướng đường dẫn
import { Routes, Route } from 'react-router-dom';

// 1. IMPORT CÁC COMPONENT TOÀN CỤC (LAYOUT CHUNG)
import Header from './components/Header';
import Footer from './components/Footer';


// 2. IMPORT CÁC TRANG CHỨC NĂNG (GIAO DIỆN CHÍNH)
import Home from './pages/home/index';
import Shop from './pages/shop/index';                  // Tự động nạp file pages/shop/index.jsx
import ProductDetail from './pages/product-detail'; // Tự động nạp file pages/product-detail/index.jsx
import Blog from './pages/blog/index';                  // Tự động nạp file pages/blog/index.jsx
import BlogDetail from './pages/blog-detail/index';  // Nạp trang chi tiết bài viết cụ thể
import Cart from './pages/cart/index';                  // Tự động nạp file pages/cart/index.jsx
import Checkout from './pages/checkout/index';          // Tự động nạp file pages/checkout/index.jsx
import Register from './pages/register/index';
import Login from './pages/login/index';
import MyOrders from './pages/auth/MyOrders';
import Profile from './pages/auth/Profile';
import AboutUs from './pages/about/index';


function App() {
    return (

        <div className="d-flex flex-column min-vh-100 bg-light">

            <Header />

            <main className="flex-grow-1">

                <Routes>

                    <Route path="/" element={<Home />} />

                    <Route path="/shop" element={<Shop />} />

                    <Route path="/product/:id" element={<ProductDetail />} />

                    <Route path="/blog" element={<Blog />} />

                    <Route path="/blog/:id" element={<BlogDetail />} />

                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/cart" element={<Cart />} />

                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/my-orders" element={<MyOrders />} />
                    <Route path="/Profile" element={<Profile />} />



                </Routes>

            </main>

            <Footer />

        </div>

    );
}

export default App;

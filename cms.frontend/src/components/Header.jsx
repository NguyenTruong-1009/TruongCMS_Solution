import React from 'react';
// Import thành phần Link để chuyển trang mượt mà không bị tải lại trang (Hard-Reload)
import { Link, useLocation } from 'react-router-dom';


function Header() {
    // Dùng hook useLocation của react-router-dom để bắt đường dẫn URL hiện tại
    const location = useLocation();


    // ────────────────────────────────────────────────────────
    // LOGIC CỐT LÕI: ĐỌC VÀ HOÀN NGUYÊN PHIÊN ĐĂNG NHẬP KHÁCH HÀNG
    // ────────────────────────────────────────────────────────
    // 1. Đọc chuỗi văn bản thô từ bộ nhớ LocalStorage của trình duyệt
    const customerString = localStorage.getItem('customer');


    // 2. Chuyển đổi ngược chuỗi văn bản (String) thành đối tượng JSON sạch để lấy các trường dữ liệu
    const customer = customerString ? JSON.parse(customerString) : null;


    /**
     * Hàm xử lý sự kiện Đăng xuất (Dọn dẹp tài khoản)
     */
    const handleLogoutSubmit = (e) => {
        e.preventDefault();


        // Xóa sạch dấu vết chiếc chìa khóa định danh khỏi bộ nhớ trình duyệt
        localStorage.removeItem('customer');


        alert("🔒 ĐÃ ĐĂNG XUẤT: Phiên làm việc an toàn của bạn đã kết thúc!");


        // Cưỡng chế điều hướng quay về trang chủ và dọn dẹp lại toàn bộ State hệ thống
        window.location.href = "/";
    };


    // Hàm xử lý giả lập khi bấm Tìm kiếm nhanh
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        alert("Chức năng tìm kiếm nhanh trên Header sẽ kết nối API Search ở các buổi sau!");
    };


    // Hàm hỗ trợ kiểm tra trang hiện tại để gán hiệu ứng làm sáng (Active) menu chuẩn v4
    const isActive = (path) => {
        // Nếu trùng khớp URL, trả về class 'active font-weight-bold text-primary', ngược lại trả về 'text-dark'
        return location.pathname === path ? 'active font-weight-bold text-primary' : 'text-dark';
    };


    return (
        <header className="main-header-wrapper bg-white shadow-sm sticky-top">
            {/* ──────────────────────────────────────────────────────── */}
            {/* TẦNG TIỆN ÍCH 1: THANH TOP BAR (Cập nhật chuẩn Dropdown v4) */}
            {/* ──────────────────────────────────────────────────────── */}
            <div className="top-bar bg-dark py-2 text-white" style={{ fontSize: '13px' }}>
                <div className="container d-flex justify-content-between align-items-center">
                    {/* Bên trái: Hotline & Email (Giữ nguyên) */}
                    <div className="top-bar-left">
                        <span className="mr-3">
                            <i className="fas fa-phone-alt mr-1"></i> Hotline: 090x.xxx.xxx
                        </span>
                        <span>
                            <i className="fas fa-envelope mr-1"></i> Email: support@truongcms.retail
                        </span>
                    </div>


                    {/* Bên phải: Nút Đăng nhập / Đăng ký hoặc Dropdown sống */}
                    <div className="top-bar-right">
                        {customer ? (
                            /* KỊCH BẢN 1: ĐÃ LOGIN THÀNH CÔNG -> HIỂN THỊ MENU THẢ CHUẨN BOOTSTRAP 4 */
                            <ul className="nav justify-content-end p-0 m-0" style={{ listStyle: 'none' }}>
                                <li className="nav-item dropdown">
                                    {/* Nút kích hoạt Dropdown (Thêm class text-white và cursor) */}
                                    <a
                                        className="nav-link dropdown-toggle p-0 text-white font-weight-bold text-decoration-none"
                                        href="#"
                                        id="topBarAuthDropdown"
                                        role="button"
                                        data-toggle="dropdown" // Kích hoạt Script Bootstrap ngầm
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <i className="fas fa-user-circle mr-1 text-info"></i> Chào, {customer.fullName}
                                    </a>


                                    {/* Khối kho menu con xổ ra (Ép style zIndex lớn để đè lên tầng logo phía dưới) */}
                                    <div
                                        className="dropdown-menu dropdown-menu-right shadow border-0 mt-2"
                                        aria-labelledby="topBarAuthDropdown"
                                        style={{ borderRadius: '8px', zIndex: 9999, minWidth: '160px' }}
                                    >
                                        <Link className="dropdown-item small font-weight-bold text-secondary py-2" to="/profile">
                                            <i className="fas fa-id-card mr-2 text-primary"></i> Hồ sơ cá nhân
                                        </Link>
                                        <Link className="dropdown-item small font-weight-bold text-secondary py-2" to="/my-orders">
                                            <i className="fas fa-box-open mr-2 text-success"></i> Đơn hàng của tôi
                                        </Link>
                                        <div className="dropdown-divider"></div>
                                        <button
                                            className="dropdown-item small font-weight-bold text-danger py-2 w-100 text-left border-0 bg-transparent"
                                            onClick={handleLogoutSubmit}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <i className="fas fa-sign-out-alt mr-2"></i> Đăng xuất
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        ) : (
                            /* KỊCH BẢN 2: CHƯA ĐĂNG NHẬP -> TRẢ VỀ CẶP NÚT GỐC CỦA THẦY */
                            <>
                                <Link to="/login" className="text-white mr-3 text-decoration-none transition-link">
                                    <i className="fas fa-user mr-1"></i> Đăng nhập
                                </Link>
                                <Link to="/register" className="text-white text-decoration-none transition-link">
                                    <i className="fas fa-user-plus mr-1"></i> Đăng ký
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>


            {/* ──────────────────────────────────────────────────────── */}
            {/* TẦNG TIỆN ÍCH 2: KHU VỰC CHÍNH (Logo, Search Bar & Giỏ hàng) */}
            {/* ──────────────────────────────────────────────────────── */}
            <div className="main-header py-3 border-bottom">
                <div className="container">
                    <div className="row align-items-center">


                        {/* 1. Cột Logo Thương Hiệu */}
                        <div className="col-md-3 col-6">
                            <Link to="/" className="text-decoration-none">
                                <h3 className="font-weight-bold m-0" style={{ color: '#005088', letterSpacing: '1px' }}>
                                    TruongCMS<span style={{ color: '#11CAA0' }}>.Sneaker</span>
                                </h3>
                            </Link>
                        </div>


                        {/* 2. Cột Ô Tìm Kiếm Sản Phẩm (Sử dụng border-right-0 chuẩn v4) */}
                        <div className="col-md-6 d-none d-md-block">
                            <form className="input-group" onSubmit={handleSearchSubmit}>
                                <input
                                    type="text"
                                    className="form-control border-right-0"
                                    placeholder="Tìm kiếm mẫu đầm dạ hội, sơ mi công sở..."
                                    style={{ borderRadius: '20px 0 0 20px', fontSize: '14px' }}
                                />
                                <div className="input-group-append">
                                    <button
                                        className="btn btn-primary border-left-0 px-4"
                                        type="submit"
                                        style={{
                                            borderRadius: '0 20px 20px 0',
                                            backgroundColor: '#005088',
                                            borderColor: '#005088'
                                        }}
                                    >
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </form>
                        </div>


                        {/* 3. Cột Giỏ Hàng Nhanh (Sử dụng text-right chuẩn v4) */}
                        <div className="col-md-3 col-6 text-right">
                            <Link to="/cart" className="btn position-relative p-2" style={{ color: '#005088', fontSize: '22px' }}>
                                <i className="fas fa-shopping-bag"></i>
                                {/* Vòng tròn badge đỏ số lượng giỏ hàng sống */}
                                <span
                                    className="badge badge-pill position-absolute"
                                    style={{
                                        top: '0',
                                        right: '0',
                                        backgroundColor: '#11CAA0',
                                        color: '#fff',
                                        fontSize: '11px',
                                        padding: '4px 6px'
                                    }}
                                >
                                    0
                                </span>
                            </Link>
                        </div>


                    </div>
                </div>
            </div>


            {/* ──────────────────────────────────────────────────────── */}
            {/* TẦNG TIỆN ÍCH 3: THANH MENU ĐIỀU HƯỚNG CHÍNH (BOOTSTRAP 4.6.2) */}
            {/* ──────────────────────────────────────────────────────── */}
            <div className="main-navigation bg-white py-2">
                <div className="container">
                    <nav className="navbar navbar-expand p-0">
                        {/* Ứng dụng hệ lớp nav của Bootstrap 4 để quản lý danh sách menu dọc/ngang */}
                        <ul className="navbar-nav w-100">


                            {/* Menu 1: Trang Chủ (Sử dụng mr-4 để thay thế thuộc tính gap-2 của v5) */}
                            <li className="nav-item mr-4">
                                <Link to="/" className={`nav-link p-0 text-decoration-none ${isActive('/')}`} style={{ transition: 'all 0.2s' }}>
                                    Trang Chủ
                                </Link>
                            </li>


                            {/* Menu 2: Cửa Hàng */}
                            <li className="nav-item mr-4">
                                <Link to="/shop" className={`nav-link p-0 text-decoration-none ${isActive('/shop')}`} style={{ transition: 'all 0.2s' }}>
                                    Cửa Hàng
                                </Link>
                            </li>


                            {/* Menu 3: Tin Tức / Blog */}
                            <li className="nav-item mr-4">
                                <Link to="/blog" className={`nav-link p-0 text-decoration-none ${isActive('/blog')}`} style={{ transition: 'all 0.2s' }}>
                                    Tin Tức / Blog
                                </Link>
                            </li>


                            {/* Menu 4: Về Chúng Tôi */}
                            <li className="nav-item">
                                <Link to="/about" className={`nav-link p-0 text-decoration-none ${isActive('/about')}`} style={{ transition: 'all 0.2s' }}>
                                    Về Chúng Tôi
                                </Link>
                            </li>


                        </ul>
                    </nav>
                </div>
            </div>


        </header>
    );
}


export default Header;

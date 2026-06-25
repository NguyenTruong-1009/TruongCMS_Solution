import React from "react";

function AboutUs() {
    return (
        <div className="container py-5">

            {/* Banner */}
            <div
                className="text-center text-white rounded p-5 mb-5"
                style={{
                    background: "linear-gradient(135deg,#005088,#00C896)"
                }}
            >
                <h1 className="fw-bold mb-3">
                    Về TruongCMS.Sneaker
                </h1>

                <p className="lead">
                    Nơi hội tụ những mẫu Sneaker chính hãng,
                    phong cách và chất lượng hàng đầu.
                </p>
            </div>

            {/* Giới thiệu */}
            <div className="row align-items-center mb-5">

                <div className="col-md-6">
                    <img
                        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                        className="img-fluid rounded shadow"
                        alt="Sneaker"
                    />
                </div>

                <div className="col-md-6">

                    <h2 className="fw-bold mb-3">
                        Câu chuyện của chúng tôi
                    </h2>

                    <p className="text-muted">
                        TruongCMS.Sneaker được thành lập với mong muốn
                        mang đến cho khách hàng những đôi giày thể thao
                        chính hãng, thời trang và chất lượng cao.
                    </p>

                    <p className="text-muted">
                        Chúng tôi luôn cập nhật những xu hướng mới nhất
                        từ Nike, Adidas, Jordan, Puma và nhiều thương hiệu nổi tiếng khác.
                    </p>

                </div>

            </div>

            {/* Giá trị nổi bật */}
            <div className="row text-center mb-5">

                <div className="col-md-4 mb-4">
                    <div className="card shadow border-0 h-100 p-4">
                        <i className="fas fa-check-circle fa-3x text-success mb-3"></i>
                        <h5>Chính Hãng 100%</h5>
                        <p className="text-muted">
                            Cam kết sản phẩm chính hãng, nguồn gốc rõ ràng.
                        </p>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card shadow border-0 h-100 p-4">
                        <i className="fas fa-shipping-fast fa-3x text-primary mb-3"></i>
                        <h5>Giao Hàng Nhanh</h5>
                        <p className="text-muted">
                            Hỗ trợ giao hàng toàn quốc nhanh chóng.
                        </p>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card shadow border-0 h-100 p-4">
                        <i className="fas fa-headset fa-3x text-warning mb-3"></i>
                        <h5>Hỗ Trợ 24/7</h5>
                        <p className="text-muted">
                            Đội ngũ tư vấn luôn sẵn sàng hỗ trợ khách hàng.
                        </p>
                    </div>
                </div>

            </div>

            {/* Thống kê */}
            <div className="row text-center mb-5">

                <div className="col-md-3">
                    <h1 className="text-primary fw-bold">1000+</h1>
                    <p>Khách hàng</p>
                </div>

                <div className="col-md-3">
                    <h1 className="text-success fw-bold">500+</h1>
                    <p>Sản phẩm</p>
                </div>

                <div className="col-md-3">
                    <h1 className="text-danger fw-bold">50+</h1>
                    <p>Thương hiệu</p>
                </div>

                <div className="col-md-3">
                    <h1 className="text-warning fw-bold">5★</h1>
                    <p>Đánh giá trung bình</p>
                </div>

            </div>

            {/* Liên hệ */}
            <div className="card shadow border-0 p-5">

                <h3 className="fw-bold mb-4">
                    Thông tin liên hệ
                </h3>

                <p>
                    <i className="fas fa-map-marker-alt text-danger me-2"></i>
                    Địa chỉ: Hà Nội, Việt Nam
                </p>

                <p>
                    <i className="fas fa-phone text-success me-2"></i>
                    Hotline: 0368 217 719
                </p>

                <p>
                    <i className="fas fa-envelope text-primary me-2"></i>
                    Email: truong1009@gmail.com
                </p>

            </div>

        </div>
    );
}

export default AboutUs;
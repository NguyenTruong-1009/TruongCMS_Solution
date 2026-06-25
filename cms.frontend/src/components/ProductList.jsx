import React from "react";
import { Link, useNavigate } from "react-router-dom";

const IMAGE_BASE_URL = "https://localhost:7068/images/";

function ProductList({ products }) {
    const navigate = useNavigate();
    const formatCurrency = (value) => {
        return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND"
        }).format(value);
    };

    const addToCart = (product) => {

        // Kiểm tra đăng nhập
        const customer =
            localStorage.getItem("customer");

        if (!customer) {

            alert("Bạn cần đăng ký hoặc đăng nhập trước khi mua hàng!");

            navigate("/register");
            return;
        }

        let cart =
            JSON.parse(localStorage.getItem("cart")) || [];

        const exist =
            cart.find(x => x.id === product.id);

        if (exist) {

            cart = cart.map(item =>

                item.id === product.id

                    ? {
                        ...item,
                        quantity: item.quantity + 1
                    }

                    : item
            );

        } else {

            cart.push({
                ...product,
                quantity: 1
            });

        }

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

        alert("Đã thêm vào giỏ hàng");
    };

    return (
        <div className="row">

            {products.map((item) => (

                <div
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-4"
                    key={item.id}
                >

                    <div
                        className="card h-100 shadow-sm border-0 product-card-hover"
                        style={{
                            borderRadius: "12px",
                            overflow: "hidden",
                            transition: "0.3s"
                        }}
                    >

                        {/* Hình ảnh */}
                        <div
                            className="position-relative overflow-hidden"
                            style={{
                                height: "300px",
                                backgroundColor: "#f8fafc"
                            }}
                        >

                            <img
                                src={`${IMAGE_BASE_URL}${item.imageUrl}`}
                                className="w-100 h-100"
                                alt={item.name}
                                style={{
                                    objectFit: "cover",
                                    transition: "0.5s"
                                }}
                                onMouseOver={(e) =>
                                    e.target.style.transform = "scale(1.05)"
                                }
                                onMouseOut={(e) =>
                                    e.target.style.transform = "scale(1)"
                                }
                            />

                            {item.stockQuantity <= 5 && (
                                <span
                                    className="badge bg-danger position-absolute"
                                    style={{
                                        top: "15px",
                                        left: "15px"
                                    }}
                                >
                                    Còn {item.stockQuantity} SP
                                </span>
                            )}

                        </div>

                        {/* Nội dung */}
                        <div className="card-body d-flex flex-column">

                            <h5
                                className="fw-bold mb-2"
                                style={{
                                    minHeight: "50px"
                                }}
                            >
                                {item.name}
                            </h5>

                            <p className="text-muted small">
                                {item.description}
                            </p>

                            <p
                                className="fw-bold text-danger fs-5"
                            >
                                {formatCurrency(item.price)}
                            </p>

                            <small className="text-success mb-3">
                                Còn {item.stockQuantity} sản phẩm
                            </small>

                            {/* Nút */}
                            <div className="mt-auto border-top pt-3">

                                <div className="d-flex gap-2">

                                    <Link
                                        to={`/product/${item.id}`}
                                        className="btn btn-outline-primary flex-fill"
                                    >
                                        <i className="fas fa-eye me-1"></i>
                                        Chi tiết
                                    </Link>

                                    <button
                                        className="btn btn-success btn-sm"
                                        onClick={() => addToCart(item)}
                                    >
                                        Thêm giỏ
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            ))}

        </div>
    );
}

export default ProductList;
import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {

    return (
        <div className="row">

            {products.map((item) => (

                <div
                    className="col-lg-4 col-md-6 mb-4"
                    key={item.id}
                >

                    <div className="card h-100 shadow-sm">

                        <img
                            src={`https://localhost:7068/images/${item.imageUrl}`}
                            className="card-img-top"
                            alt={item.name}
                            style={{
                                height: "250px",
                                objectFit: "cover"
                            }}
                        />

                        <div className="card-body">

                            <h6 className="fw-bold">
                                {item.name}
                            </h6>

                            <p className="text-muted">
                                {item.description}
                            </p>

                            <p className="text-danger fw-bold">
                                {Number(item.price)
                                    .toLocaleString("vi-VN")} đ
                            </p>

                            <small className="text-success">
                                Còn {item.stockQuantity} sản phẩm
                            </small>

                        </div>

                        <div className="card-footer bg-white">

                            <div className="d-flex justify-content-between">

                                <Link
                                    to={`/product/${item.id}`}
                                    className="btn btn-primary btn-sm"
                                >
                                    Chi tiết
                                </Link>

                                <button
                                    className="btn btn-success btn-sm"
                                >
                                    Thêm giỏ
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            ))}

        </div>
    );
};

export default ProductList;
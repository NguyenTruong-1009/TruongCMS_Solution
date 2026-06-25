import React, { useState, useEffect } from "react";
import axiosClient from "../../api/axiosClient";
import { useNavigate } from "react-router-dom";

function Checkout() {

    const navigate = useNavigate();

    const [cartItems, setCartItems] = useState([]);

    const [customer, setCustomer] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        notes: ""
    });

    useEffect(() => {

        const cart =
            JSON.parse(localStorage.getItem("cart")) || [];

        setCartItems(cart);

    }, []);

    const totalAmount = cartItems.reduce(
        (sum, item) =>
            sum + item.price * item.quantity,
        0
    );

    const handleChange = (e) => {

        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        });

    };

    const handleCheckout = async (e) => {

        e.preventDefault();

        if (cartItems.length === 0) {

            alert("Giỏ hàng đang trống");
            return;
        }

        const orderData = {

            customerName: customer.name,
            email: customer.email,
            phone: customer.phone,
            address: customer.address,
            notes: customer.notes,

            totalAmount: totalAmount,

            orderDetails: cartItems.map(item => ({
                productId: item.id,
                quantity: item.quantity,
                unitPrice: item.price
            }))
        };

        try {

            await axiosClient.post(
                "/Orders",
                orderData
            );

            alert("Đặt hàng thành công");

            localStorage.removeItem("cart");

            navigate("/");

        } catch (error) {

            console.log(error);

            alert("Đặt hàng thất bại");

        }

    };

    return (

        <div className="container mt-5">

            <div className="row">

                {/* Form thông tin */}

                <div className="col-md-7">

                    <div className="card shadow">

                        <div className="card-header">

                            <h4>Thông tin nhận hàng</h4>

                        </div>

                        <div className="card-body">

                            <form onSubmit={handleCheckout}>

                                <div className="mb-3">

                                    <label>Họ tên</label>

                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        required
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="mb-3">

                                    <label>Email</label>

                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        required
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="mb-3">

                                    <label>Số điện thoại</label>

                                    <input
                                        type="text"
                                        name="phone"
                                        className="form-control"
                                        required
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="mb-3">

                                    <label>Địa chỉ</label>

                                    <textarea
                                        name="address"
                                        className="form-control"
                                        rows="3"
                                        required
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="mb-3">

                                    <label>Ghi chú</label>

                                    <textarea
                                        name="notes"
                                        className="form-control"
                                        rows="3"
                                        onChange={handleChange}
                                    />

                                </div>

                                <button
                                    className="btn btn-success w-100"
                                    type="submit"
                                >
                                    Đặt hàng
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

                {/* Đơn hàng */}

                <div className="col-md-5">

                    <div className="card shadow">

                        <div className="card-header">

                            <h4>Đơn hàng của bạn</h4>

                        </div>

                        <div className="card-body">

                            {cartItems.map(item => (

                                <div
                                    key={item.id}
                                    className="d-flex justify-content-between mb-3 border-bottom pb-2"
                                >

                                    <div>

                                        <h6>
                                            {item.name}
                                        </h6>

                                        <small>
                                            SL: {item.quantity}
                                        </small>

                                    </div>

                                    <div>

                                        {(
                                            item.price *
                                            item.quantity
                                        ).toLocaleString("vi-VN")} đ

                                    </div>

                                </div>

                            ))}

                            <hr />

                            <h4 className="text-danger">

                                Tổng tiền:

                                {" "}

                                {totalAmount.toLocaleString("vi-VN")} đ

                            </h4>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default Checkout;
import React, { useEffect, useState } from "react";
import CartTable from "./CartTable";

function Cart() {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        loadCart();
    }, []);

    const loadCart = () => {

        const cart =
            JSON.parse(localStorage.getItem("cart")) || [];

        setCartItems(cart);
    };

    // Cập nhật số lượng
    const updateQuantity = (id, quantity) => {

        let cart =
            JSON.parse(localStorage.getItem("cart")) || [];

        cart = cart.map(item =>

            item.id === id
                ? { ...item, quantity: quantity }
                : item
        );

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

        setCartItems(cart);
    };

    // Xóa sản phẩm
    const removeItem = (id) => {

        let cart =
            JSON.parse(localStorage.getItem("cart")) || [];

        cart = cart.filter(item => item.id !== id);

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

        setCartItems(cart);
    };

    // Xóa toàn bộ
    const clearCart = () => {

        localStorage.removeItem("cart");

        setCartItems([]);
    };

    return (

        <div className="container mt-5">

            <h2 className="mb-4 fw-bold">
                🛒 Giỏ hàng của bạn
            </h2>

            <CartTable
                items={cartItems}
                onUpdateQuantity={updateQuantity}
                onRemove={removeItem}
            />

            {cartItems.length > 0 && (

                <div className="text-end mt-3">

                    <button
                        className="btn btn-danger"
                        onClick={clearCart}
                    >
                        Xóa toàn bộ
                    </button>

                </div>

            )}

        </div>
    );
}

export default Cart;
import React from "react";
import { Link } from "react-router-dom";

const IMAGE_URL =
    "https://localhost:7068/images/";

function CartTable({
    items,
    onUpdateQuantity,
    onRemove
}) {

    const totalPrice = items.reduce(

        (sum, item) =>
            sum + item.price * item.quantity,

        0
    );

    if (items.length === 0) {

        return (

            <div className="alert alert-warning">

                Chưa có sản phẩm nào trong giỏ hàng.

                <div className="mt-3">

                    <Link
                        to="/shop"
                        className="btn btn-primary"
                    >
                        Tiếp tục mua sắm
                    </Link>

                </div>

            </div>

        );
    }

    return (

        <div className="table-responsive">

            <table className="table table-bordered align-middle">

                <thead className="table-dark">

                    <tr>
                        <th>Ảnh</th>
                        <th>Sản phẩm</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                        <th></th>
                    </tr>

                </thead>

                <tbody>

                    {items.map(item => (

                        <tr key={item.id}>

                            <td width="120">

                                <img
                                    src={
                                        IMAGE_URL +
                                        item.imageUrl
                                    }
                                    alt={item.name}
                                    width="100"
                                    className="img-thumbnail"
                                />

                            </td>

                            <td>
                                {item.name}
                            </td>

                            <td>
                                {Number(item.price)
                                    .toLocaleString("vi-VN")} đ
                            </td>

                            <td width="150">

                                <input
                                    type="number"
                                    min="1"
                                    className="form-control"
                                    value={item.quantity}
                                    onChange={(e) =>
                                        onUpdateQuantity(
                                            item.id,
                                            Number(e.target.value)
                                        )
                                    }
                                />

                            </td>

                            <td>

                                {Number(
                                    item.price *
                                    item.quantity
                                ).toLocaleString("vi-VN")} đ

                            </td>

                            <td>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() =>
                                        onRemove(item.id)
                                    }
                                >
                                    Xóa
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

            <div className="text-end">

                <h4 className="text-danger">

                    Tổng tiền:

                    {" "}

                    {totalPrice.toLocaleString("vi-VN")} đ

                </h4>

                <Link
                    to="/checkout"
                    className="btn btn-success mt-2"
                >
                    Thanh toán
                </Link>

            </div>

        </div>

    );
}

export default CartTable;
import React, { useEffect, useState } from "react";
import productService from "../../services/productService";
import ProductCard from "../../components/ProductCard";

function HotProducts() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {

        try {

            const data =
                await productService.getAllProducts();

            // Lấy 4 sản phẩm đầu tiên
            setProducts((data.data || data).slice(0, 4));

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <section className="py-5">

            <div className="container">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <h3 className="fw-bold text-danger">
                        🔥 SẢN PHẨM NỔI BẬT
                    </h3>

                </div>

                <div className="row">

                    {products.map(item => (

                        <div
                            className="col-lg-3 col-md-6 mb-4"
                            key={item.id}
                        >

                            <ProductCard item={item} />

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
}

export default HotProducts;
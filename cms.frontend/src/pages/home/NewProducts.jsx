import React, { useEffect, useState } from "react";
import productService from "../../services/productService";
import ProductCard from "../../components/ProductCard";

function NewProducts() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {

        try {

            const data =
                await productService.getAllProducts();

            const list = data.data || data;

            // Sắp xếp sản phẩm mới nhất theo Id
            const newest =
                [...list]
                    .sort((a, b) => b.id - a.id)
                    .slice(0, 8);

            setProducts(newest);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <section className="py-5 bg-light">

            <div className="container">

                <h3 className="fw-bold text-primary mb-4">
                    🆕 SẢN PHẨM MỚI
                </h3>

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

export default NewProducts;
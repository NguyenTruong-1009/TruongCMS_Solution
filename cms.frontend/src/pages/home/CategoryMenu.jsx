import React, { useEffect, useState } from "react";
import categoryProductService from "../services/categoryProductService";

const CategoryMenu = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        loadCategories();
    }, []);

    const loadCategories = async () => {

        try {

            const data =
                await categoryProductService.getAllCategoryProducts();

            setCategories(data);

        }
        catch (error) {

            console.log(error);

        }
    };
    console.log(categories);
    return (

        <div className="container mt-4">

            <h3 className="mb-3">
                Danh mục sản phẩm
            </h3>

            <div className="row">

                {categories.map(item => (

                    <div
                        className="col-md-3 mb-3"
                        key={item.id}
                    >

                        <div className="card shadow text-center h-100">

                            <div className="card-body">

                                <h5>
                                    {item.name}
                                </h5>

                                <p className="small text-muted">
                                    {item.description}
                                </p>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );
};

export default CategoryMenu;
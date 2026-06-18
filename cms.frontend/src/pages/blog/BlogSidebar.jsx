import React, { useEffect, useState } from "react";
import blogService from "../../services/blogService";

function BlogSidebar({ onSelectCategory }) {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        loadCategories();
    }, []);

    const loadCategories = async () => {

        try {

            const data =
                await blogService.getBlogCategories();

            setCategories(data);

        }
        catch (error) {

            console.log(error);

        }
    };

    return (

        <div className="card shadow-sm">

            <div className="card-header bg-primary text-white">
                DANH MỤC TIN TỨC
            </div>

            <div className="list-group list-group-flush">

                <button
                    className="list-group-item list-group-item-action"
                    onClick={() => onSelectCategory(null)}
                >
                    Tất cả bài viết
                </button>

                {categories.map(item => (

                    <button
                        key={item.id}
                        className="list-group-item list-group-item-action"
                        onClick={() =>
                            onSelectCategory(item.id)
                        }
                    >
                        {item.name}
                    </button>

                ))}

            </div>

        </div>

    );
}

export default BlogSidebar;
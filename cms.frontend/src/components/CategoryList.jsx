import React, { useState, useEffect } from 'react';
import categoryService from '../services/categoryService';

const CategoryList = () => {

    // State lưu danh sách category
    const [categories, setCategories] = useState([]);

    // State loading
    const [loading, setLoading] = useState(true);

    // Tự động gọi API khi component render lần đầu
    useEffect(() => {

        const fetchCategories = async () => {
            try {

                setLoading(true);

                // Gọi API
                const data = await categoryService.getAllCategories();

                // Đổ dữ liệu vào state
                setCategories(data);

            } catch (error) {

                console.error("Lỗi khi tải danh mục bài viết:", error);

            } finally {

                setLoading(false);

            }
        };

        fetchCategories();

    }, []);

    // Loading UI
    if (loading) {
        return (
            <div className="text-center my-4">
                Đang tải danh mục bài viết...
            </div>
        );
    }

    return (
        <div className="card shadow-sm border-0 rounded-lg">

            {/* Header */}
            <div className="card-header bg-white border-bottom-0 pt-4 pb-2 px-4">
                <h5
                    className="card-title text-uppercase font-weight-bold text-dark d-flex align-items-center mb-0"
                    style={{
                        letterSpacing: '0.5px',
                        fontSize: '1.1rem'
                    }}
                >
                    <i
                        className="fa-solid fa-list text-primary mr-2"
                        style={{ fontSize: '1.2rem' }}
                    ></i>

                    Danh mục bài viết
                </h5>
            </div>

            {/* Body */}
            <div className="card-body p-0">

                <div className="list-group list-group-flush">

                    {categories.length === 0 ? (

                        <div className="p-4 text-center text-muted">
                            Không có danh mục nào.
                        </div>

                    ) : (

                        categories.map((item) => (

                            <button
                                key={item.id}
                                type="button"
                                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center px-4 py-3"
                                style={{
                                    fontSize: '0.95rem',
                                    color: '#495057'
                                }}
                            >

                                <span>{item.name}</span>

                                <i
                                    className="fa-solid fa-chevron-right text-muted"
                                    style={{
                                        fontSize: '0.8rem',
                                        opacity: 0.5
                                    }}
                                ></i>

                            </button>

                        ))

                    )}

                </div>

            </div>
        </div>
    );
};

export default CategoryList;
import axiosClient from '../api/axiosClient';

const categoryService = {
    /**
     * Hàm lấy toàn bộ danh mục bài viết từ Backend
     * Endpoint kết nối tới CategoriesController trong ASP.NET Core
     */
    getAllCategories: () => {
        const url = '/categories';
        return axiosClient.get(url);
    }
};

export default categoryService;
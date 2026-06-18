import axiosClient from '../api/axiosClient';

const blogService = {

    // Lấy tất cả bài viết
    getAllPosts: () => {
        return axiosClient.get('/Posts');
    },

    // Lấy danh mục blog
    getBlogCategories: () => {
        return axiosClient.get('/Categories');
    },

    // Lấy bài viết theo danh mục
    getPostsByCategory: (categoryId) => {
        return axiosClient.get(`/Posts/category/${categoryId}`);
    },

    // Lấy chi tiết bài viết
    getPostById: (id) => {
        return axiosClient.get(`/Posts/${id}`);
    }
};

export default blogService;
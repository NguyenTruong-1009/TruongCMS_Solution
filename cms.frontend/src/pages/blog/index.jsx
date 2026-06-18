import React, {
    useEffect,
    useState
} from "react";

import blogService
    from "../../services/blogService";

import BlogSidebar
    from "./BlogSidebar";

import PostCard
    from "../../components/PostCard";

function Blog() {

    const [posts, setPosts] =
        useState([]);

    useEffect(() => {

        loadPosts();

    }, []);

    const loadPosts = async () => {

        try {

            const data =
                await blogService.getAllPosts();

            setPosts(data);

        }
        catch (error) {

            console.log(error);

        }
    };

    const handleCategory =
        async (categoryId) => {

            try {

                if (!categoryId) {

                    loadPosts();

                    return;
                }

                const data =
                    await blogService
                        .getPostsByCategory(categoryId);

                setPosts(data);

            }
            catch (error) {

                console.log(error);

            }
        };

    return (

        <div className="container mt-4">

            <div className="row">

                <div className="col-md-3">

                    <BlogSidebar
                        onSelectCategory={
                            handleCategory
                        }
                    />

                </div>

                <div className="col-md-9">

                    <h2 className="mb-4">

                        📰 Tin tức thời trang

                    </h2>

                    <div className="row">

                        {posts.map(post => (

                            <div
                                key={post.id}
                                className="col-md-4 mb-4"
                            >

                                <PostCard
                                    post={post}
                                />

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </div>

    );
}

export default Blog;
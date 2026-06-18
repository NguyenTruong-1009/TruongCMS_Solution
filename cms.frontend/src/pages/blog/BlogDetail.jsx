import React,
{
    useEffect,
    useState
}
    from "react";

import {
    useParams
}
    from "react-router-dom";

import blogService
    from "../../services/blogService";

function BlogDetail() {

    const { id } =
        useParams();

    const [post, setPost] =
        useState(null);

    useEffect(() => {

        loadPost();

    }, [id]);

    const loadPost = async () => {

        try {

            const data =
                await blogService
                    .getPostById(id);

            setPost(data);

        }
        catch (error) {

            console.log(error);

        }
    };

    if (!post)
        return <h3>Loading...</h3>;

    return (

        <div className="container mt-5">

            <h1 className="mb-3">

                {post.title}

            </h1>

            <p className="text-muted">

                {new Date(
                    post.createdDate
                ).toLocaleDateString("vi-VN")}

            </p>

            <hr />

            <img
                src={
                    "https://localhost:7068"
                    + post.imageUrl
                }
                alt={post.title}
                className="img-fluid rounded mb-4"
            />

            <div
                dangerouslySetInnerHTML={{
                    __html: post.content
                }}
            />

        </div>

    );
}

export default BlogDetail;
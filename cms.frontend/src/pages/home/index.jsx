import React from "react";


import HeroBanner from "./HeroBanner";
import CategoryMenu from "../../components/CategoryMenu";
import LatestBlog from "./LatestBlog";
import ProductGrid from "./ProductGrid";
import HotProducts from "./HotProducts";
import NewProducts from "./NewProducts";




const Home = () => {

return (

    <>


        {/* Tầng 1: Banner */}
        <HeroBanner />

        {/* Tầng 2: Danh mục */}
        <section className="mt-4">
            <CategoryMenu />
        </section>

        {/* Tầng 3: Sản phẩm mới */}
        <section className="container mt-5">

            <div className="d-flex justify-content-between align-items-center mb-3">



            </div>

            <NewProducts />

        </section>

     
        <section className="container mt-5">

            <div className="d-flex justify-content-between align-items-center mb-3">



            </div>

            <HotProducts />
    

        </section>

        {/* Tầng 5: Tin tức */}
        <section className="container mt-5">

            <div className="d-flex justify-content-between align-items-center mb-3">

                <h3 className="fw-bold">
                    📰 Tin tức thời trang
                </h3>

            </div>

            <LatestBlog />

        </section>



    </>

);


};

export default Home;

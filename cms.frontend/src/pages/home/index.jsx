import React from "react";


import HeroBanner from "./HeroBanner";
import CategoryMenu from "../../components/CategoryMenu";
import LatestBlog from "./LatestBlog";
import ProductGrid from "./ProductGrid";

//import NewProduct from "../../components/NewProduct";
//import HotProduct from "../../components/HotProduct";



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

                <h3 className="fw-bold">
                    🆕 Sản phẩm mới nhất
                </h3>

            </div>

            {/*<NewProduct />*/}

        </section>

        {/* Tầng 4: Sản phẩm bán chạy */}
        <section className="container mt-5">

            <div className="d-flex justify-content-between align-items-center mb-3">

                <h3 className="fw-bold text-danger">
                    🔥 Sản phẩm bán chạy
                </h3>

            </div>

            {/*<HotProduct />*/}
            <ProductGrid />

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

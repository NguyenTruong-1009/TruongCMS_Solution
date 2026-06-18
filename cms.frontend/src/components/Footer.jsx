import React from "react";

const Footer = () => {
    return (
        <footer className="bg-dark text-white mt-5">

            <div className="container py-4">

                <div className="row">

                    <div className="col-md-4">

                        <h5>Truong Sneaker</h5>

                        <p>
                            Chuyên cung cấp giày Nike,
                            Adidas, Puma chính hãng.
                        </p>

                    </div>

                    <div className="col-md-4">

                        <h5>Liên hệ</h5>

                        <p>Email: admin@gmail.com</p>

                        <p>Phone: 0909123456</p>

                    </div>

                    <div className="col-md-4">

                        <h5>Địa chỉ</h5>

                        <p>TP Hồ Chí Minh</p>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;
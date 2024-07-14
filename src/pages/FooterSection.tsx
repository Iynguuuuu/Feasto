import { FaLinkedinIn, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const FooterSection = () => {
    return (
        <div className="mt-16">
            <hr />
            <div className="md:w-[85%] p-5 md:mx-auto">
                <div className="flex md:flex-row flex-col md:space-y-0 space-y-8 md:justify-between">
                    <div className="flex flex-col">
                        <div>
                            <img src="/logo.png" alt="" />
                        </div>
                        <div className="mt-4">
                            <p className="text-lg text-3 w-[380px]">
                                Feasto simplifies creating a stunning, professional
                                web store with its user-friendly templates and quick setup.
                            </p>
                        </div>
                        <div className="flex flex-row space-x-4 mt-5">
                            <a href="https://www.linkedin.com/company/feastoai/">
                                <div className="social-link">
                                    <FaLinkedinIn className="size-4" />
                                </div>
                            </a>

                            <a href="https://www.facebook.com/Feasto.io?mibextid=LQQJ4d">
                                <div className="social-link">
                                    <FaFacebookF className="size-4" />
                                </div>
                            </a>
                            <a href="https://www.instagram.com/feastosl/">
                                <div className="social-link">
                                    <FaInstagram className="size-4" />
                                </div>
                            </a>
                            <a href="">
                                <div className="social-link">
                                    <FaWhatsapp className="size-4" />
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-wrap md:flex-row md:space-x-12">
                        <div className="w-1/2 md:w-auto mb-4 md:mb-0">
                            <h2 className="text-text1 text-xl font-semibold">Company</h2>
                            <div className="flex flex-col space-y-3 mt-4">
                                <a href="">About us</a>
                                <a href="">Contact us</a>
                                <a href="">Careers</a>
                                <a href="">Privacy policy</a>
                                <a href="">Terms & Service</a>
                            </div>
                        </div>
                        <div className="w-1/2 md:w-auto mb-4 md:mb-0">
                            <h2 className="text-text1 text-xl font-semibold">Templates</h2>
                            <div className="flex flex-col space-y-3 mt-4">
                                <a href="">Restaurants & Food Stalls</a>
                                <a href="">Retail Stores</a>
                                <a href="">Grocery Stores</a>
                            </div>
                        </div>
                        <div className="w-1/2 md:w-auto mb-4 md:mb-0">
                            <h2 className="text-text1 text-xl font-semibold">Resources</h2>
                            <div className="flex flex-col space-y-3 mt-4">
                                <a href="">Blogs</a>
                                <a href="">Knowledge base</a>
                                <a href="">Help center</a>
                            </div>
                        </div>
                        <div className="w-1/2 md:w-auto mb-4 md:mb-0">
                            <h2 className="text-text1 text-xl font-semibold">Features</h2>
                            <div className="flex flex-col space-y-3 mt-4">
                                <a href="">WhatsApp order management</a>
                                <a href="">Digital storefront</a>
                                <a href="">Infrastructure analytics</a>
                                <a href="">Effortless offer management</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-primary ">
                <div className="md:w-[85%] flex md:flex-row flex-col md:space-y-0 space-y-3 justify-between mx-auto p-5 text-center">

                    <div><p className="text-white text-base">Designed & Developed with 🤍 by Cogntix</p></div>
                    <div className="text-white text-base"><p>© 2022 Feasto. All rights reserved.</p></div>
                </div>
            </div>


        </div>
    );
};

export default FooterSection;

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const HomePage = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="h-[1400px] flex items-center justify-center ">
            <div className="w-[90%] mx-auto text-center relative md:mt-[2rem] mt-[-25rem]">
                <div>
                    <p className="text-[14px] md:text-[18px] text-primary font-medium">Seamless Setup, Quick, Easy and No-Code</p>
                    <p className="text-[36px] md:text-[60px] text-text1 font-black relative">
                        <span className="block md:inline">Build Website for</span>
                        <span className="block md:inline"> your Business</span>
                        <br className="hidden md:block" />
                        <span className="md:inline hidden">Business</span>
                        <span className="block md:inline"> within
                            <span className="relative inline-block ml-2">
                                3 Minutes
                                <img src="/Stroke.png" alt="stroke" className="absolute mt-6 inset-0 w-full h-full object-contain -z-10" />
                            </span>
                        </span>
                    </p>
                    <div className="flex flex-col md:flex-row md:space-x-3 mt-8 justify-center items-center space-y-3 md:space-y-0">
                        <div className="flex justify-center items-center w-[358px] md:w-[260px] h-[56px] rounded-md bg-primary border-[1px] outline-gray-300">
                            <p className="text-white text-[16px] font-semibold">Build Your Website Now</p>
                        </div>
                        <div className="flex justify-center items-center w-[358px] md:w-[139px] h-[56px] rounded-md bg-white border-[1px] outline-gray-300">
                            <p className="text-text1 text-[16px] font-semibold">Get a demo</p>
                        </div>
                    </div>
                    <div className="flex flex-row md:space-x-[-7rem] space-x-[-2rem] mt-5">
                        <div><img src="/phone1.png" alt="phone1" /></div>
                        <div><img src="/phone2.png" alt="phone2" /></div>
                        <div><img src="/phone3.png" alt="phone3" /></div>
                        <div><img src="/phone4.png" alt="phone4" /></div>
                    </div>
                </div>

                <Slider {...settings} className="mt-[2rem]">
                    <div><img src="/Logo1.png" alt="logo1" /></div>
                    <div><img src="/Logo2.png" alt="logo2" /></div>
                    <div><img src="/Logo3.png" alt="logo3" /></div>
                    <div><img src="/Logo4.png" alt="logo4" /></div>
                    <div><img src="/Logo5.png" alt="logo5" /></div>
                    <div><img src="/Logo6.png" alt="logo6" /></div>
                    <div><img src="/Logo7.png" alt="logo7" /></div>
                    <div><img src="/Logo8.png" alt="logo8" /></div>
                    <div><img src="/Logo2.png" alt="logo9" /></div>
                    <div><img src="/Logo10.png" alt="logo10" /></div>
                </Slider>
            </div>
        </div>
    );
};

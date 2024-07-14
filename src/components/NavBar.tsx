import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const handleToggle = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    return (
        <div className="w-[100%] items-center mx-auto fixed z-[10000] h-[104px] smaller:h-[90px] bg-white shadow-md">
            <div className='flex items-center justify-between w-[90%] mx-auto h-[100%]'>
                <div className="flex items-center">
                    <div onClick={handleToggle} className="cursor-pointer text-gray-400 md:hidden">
                        {isMobileNavOpen ? (
                            <FaXmark className="size-[40px]" />
                        ) : (
                            <Bars3Icon className="size-[40px]" />
                        )}
                    </div>
                    <a href="#Home">
                        <img
                            className="cursor-pointer ml-2 w-[110px] h-[28.6px] md:w-auto md:h-auto smaller:w-[80px] smaller:h-[25px]"
                            src="/logo.png" alt="logo"
                        /></a>
                </div>

                <div className="hidden md:flex flex-grow items-center ml-10 space-x-4 md:space-x-16">
                    <a href="#Features"><div className='nav-link'>Features</div></a>
                    <a href="#Pricing"><div className='nav-link'>Pricing</div></a>
                    <a href="#Templates"><div className='nav-link'>Templates</div></a>
                    <a href="#FAQ"><div className='nav-link'>Resources</div></a>
                </div>

                <div className="flex flex-row space-x-3">
                    <button className="hidden md:flex justify-center items-center w-[139px] h-[52px] rounded-md bg-white border-[1px] outline-gray-300">
                        <p className="text-text1 text-[16px] font-semibold">Get a demo</p>
                    </button>
                    <button className="flex justify-center items-center md:w-[169px] md:h-[52px] w-[137px] h-[46px] smaller:w-[120px] smaller:h-[35px]  rounded-md bg-primary border-[1px] outline-gray-300">
                        <p className="text-white md:text-[16px] text-sm smaller:text-[12px] md:font-semibold font-medium">Sign up for free</p>
                    </button>
                </div>
            </div>

            {isMobileNavOpen && (
                <div className="bg-white md:hidden flex flex-col  text-left space-y-2 mt-4">
                    <a href="#Features" className='text-[16px] text-text2 font-semibold hover:bg-red hover:text-primary p-3'>Features</a>
                    <a href="#Pricing" className='text-[16px] text-text2 font-semibold hover:bg-red hover:text-primary p-3'>Pricing</a>
                    <a href="#Templates" className='text-[16px] text-text2 font-semibold hover:bg-red hover:text-primary p-3'>Templates</a>
                    <a href="#FAQ" className='text-[16px] text-text2 font-semibold hover:bg-red hover:text-primary p-3'>Resources</a>
                </div>
            )}
        </div>
    );
};

export default Navbar;

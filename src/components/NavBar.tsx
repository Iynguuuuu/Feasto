import { Bars3Icon } from "@heroicons/react/24/solid"; // mobile navbar icon



const Navbar = () => {

    return (
        <div className="w-[100%] items-center mx-auto fixed z-[10000] h-[104px] bg-white shadow-md">
            <div className='flex items-center justify-between w-[90%] mx-auto h-[100%]'>
                <div className="flex items-center">
                    <div>
                        <Bars3Icon className='size-[40px] ml-5 md:hidden cursor-pointer text-gray-400' />
                    </div>
                    <img
                        className="cursor-pointer ml-2 w-[110px] h-[28.6px] md:w-auto md:h-auto"
                        src="/logo.png" alt="logo"
                    />
                </div>

                <div className="flex-grow flex items-center ml-10 space-x-4 md:space-x-16">
                    <a href="#Home"><div className='nav-link'>Features</div></a>
                    <a href="#Brief"><div className='nav-link'>Pricing</div></a>
                    <a href="#Feature"><div className='nav-link'>Templates</div></a>
                    <a href="#AboutUs"><div className='nav-link'>Resources</div></a>
                </div>

                <div className="flex flex-row space-x-3">
                    <button className="hidden md:flex justify-center items-center w-[139px] h-[52px] rounded-md bg-white border-[1px] outline-gray-300">
                        <p className="text-text1 text-[16px] font-semibold">Get a demo</p>
                    </button>
                    <button className="flex justify-center items-center w-[169px] h-[52px] rounded-md bg-primary border-[1px] outline-gray-300">
                        <p className="text-white text-[16px] font-semibold">Sign up for free</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;

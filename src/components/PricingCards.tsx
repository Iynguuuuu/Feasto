import type { SVGProps } from 'react';
import { FaXmark } from "react-icons/fa6";

export function CharmTick(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 16 16" {...props}><path fill="none" stroke="#e52d3c" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m2.75 8.75l3.5 3.5l7-7.5"></path></svg>);
}

const PricingCards = () => {
    return (
        <div>
            <div className="mt-12 flex md:space-x-5 md:flex-row flex-col-reverse md:space-y-0 ">
                <div className="flex justify-center text-center w-[360px] h-[501px]  bg-white rounded-lg shadow-lg md:mt-16 mt-8">

                    <div className="pt-7 pr-9 pb-9 pl-9">
                        <h5 className=" text-lg font-semibold text-primary">FREE</h5>
                        <p className="mt-4 font-bold text-5xl text-text1 tracking-[-2px] ">$0</p>


                        <div className="mt-8 flex justify-center items-center w-[290px] h-[60px] rounded-md bg-white border-[1px] outline-gray-300">
                            <p className="text-text1 text-base font-semibold">Start for FREE</p>
                        </div>


                        <div className="mt-5 flex flex-row space-x-2">
                            <CharmTick />
                            <p className='text-base text-text1'>Unlimited orders</p>
                        </div>
                        <div className="mt-5 flex flex-row space-x-2">
                            <CharmTick />
                            <p className='text-base text-text1'>Unlimited products listing</p>
                        </div>
                        <div className="mt-5 flex flex-row space-x-2">
                            <CharmTick />
                            <p className='text-base text-text1'>Unlimited offer creation</p>
                        </div>
                        <div className="mt-5 flex flex-row space-x-2">
                            <FaXmark className="size-5 text-text5" />
                            <p className='text-base text-text5 line-through'>Monthly 2 hrs marketing support</p>
                        </div>
                        <div className="mt-5 flex flex-row space-x-2">
                            <FaXmark className="size-5 text-text5" />
                            <p className='text-base text-text5 line-through'>Premium customer care</p>
                        </div>
                        <div className="mt-5 flex flex-row space-x-2">
                            <FaXmark className="size-5 text-text5" />
                            <p className='text-base text-text5 line-through'>Custom domain</p>
                        </div>


                    </div>
                </div>
                <div className="flex justify-center text-center w-[360px] h-[626px] bg-white rounded-lg border-primary border-2 shadow-2xl">
                    <div>
                        <div className="pt-2 pb-2 h-[44px] w-[360px] rounded-t-lg bg-primary flex justify-center">
                            <p className="text-white text-lg font-semibold">Save 25%</p>
                        </div>
                        <div className="p-[35px] pt-[30px]">
                            <h5 className=" text-lg font-semibold text-primary">PRO - Annual plan</h5>
                            <p className="mt-3 font-semibold text-2xl text-text5 line-through tracking-[-1px]">$9.99</p>
                            <p className="mt-2 font-bold text-5xl text-text1 tracking-[-2px] ">$7.5</p>


                            <p className="text-text6 text-base mt-3">Monthly, Billed annually</p>
                            <div className="mt-4 flex justify-center items-center w-[290px] h-[60px] rounded-md bg-primary border-[1px] outline-gray-300">
                                <p className="text-white text-base font-semibold">Get 14 days free trail</p>
                            </div>


                            <div className="mt-5 flex flex-row space-x-2">
                                <CharmTick />
                                <p className='text-base text-text1'>Unlimited orders</p>
                            </div>
                            <div className="mt-5 flex flex-row space-x-2">
                                <CharmTick />
                                <p className='text-base text-text1'>Unlimited products listing</p>
                            </div>
                            <div className="mt-5 flex flex-row space-x-2">
                                <CharmTick />
                                <p className='text-base text-text1'>Unlimited offer creation</p>
                            </div>
                            <div className="mt-5 flex flex-row space-x-2">
                                <CharmTick />
                                <p className='text-base text-text1'>Monthly 2 hrs marketing support</p>
                            </div>
                            <div className="mt-5 flex flex-row space-x-2">
                                <CharmTick />
                                <p className='text-base text-text1'>Premium customer carer</p>
                            </div>
                            <div className="mt-5 flex flex-row space-x-2">
                                <CharmTick />
                                <p className='text-base text-text1'>Custom domain</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PricingCards
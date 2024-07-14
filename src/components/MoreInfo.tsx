import type { SVGProps } from 'react';

export function MingcuteMailOpenLine(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 24 24" {...props}>
            <g fill="none">
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                <path fill="white" d="M10.89 2.538a2 2 0 0 1 2.072-.09l.147.09l8 5.333a2 2 0 0 1 .884 1.498l.007.166V19a2 2 0 0 1-1.85 1.995L20 21H4a2 2 0 0 1-1.995-1.85L2 19V9.535a2 2 0 0 1 .756-1.566l.135-.098zm9.11 8.33l-7.168 4.78a1.5 1.5 0 0 1-1.664 0L4 10.867V19h16zm-8-6.666L4.803 9L12 13.798L19.197 9z"></path>
            </g>
        </svg>
    );
}

export function AkarIconsPhone(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 24 24" {...props}>
            <path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.554 6.24L7.171 2.335c-.39-.45-1.105-.448-1.558.006L2.831 5.128c-.828.829-1.065 2.06-.586 3.047a29.207 29.207 0 0 0 13.561 13.58c.986.479 2.216.242 3.044-.587l2.808-2.813c.455-.455.456-1.174.002-1.564l-3.92-3.365c-.41-.352-1.047-.306-1.458.106l-1.364 1.366a.462.462 0 0 1-.553.088a14.557 14.557 0 0 1-5.36-5.367a.463.463 0 0 1 .088-.554l1.36-1.361c.412-.414.457-1.054.101-1.465"></path>
        </svg>
    );
}

export function AkarIconsLocation(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 24 24" {...props}>
            <g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                <circle cx={12} cy={10} r={3}></circle>
                <path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8"></path>
            </g>
        </svg>
    );
}

const MoreInfo = () => {
    return (
        <div className="md:w-[1080px] w-[358px] mx-auto">
            <div className="bg-gray-50 rounded-lg mt-16 mx-auto">
                <div className="md:p-10 p-5 text-center">
                    <h2 className="text-text1 font-black md:text-4xl text-2xl">Still have some question?</h2>
                    <p className="text-text3 text-lg mt-4">Can’t find the answer that you’re looking for?
                        Feel free to <br className="md:block hidden" /> our team reach out for more info.</p>
                </div>
                <div className="p-10 flex md:flex-row flex-col justify-center md:space-x-[4rem] md:space-y-0 space-y-8">
                    <div className="flex md:flex-row flex-col md:space-x-3 md:space-y-0 space-y-3">
                        <div className="size-16 bg-primary rounded-lg flex items-center justify-center md:mx-0 mx-auto ">
                            <MingcuteMailOpenLine />
                        </div>
                        <div className='md:mx-0 mx-auto md:text-left text-center'>
                            <p className='text-primary font-medium text-lg'>Email Address</p>
                            <p className='text-text1 font-semibold text-xl'>hello@feasto.io</p>
                        </div>
                    </div>
                    {/* Vertical line */}
                    <div className="hidden md:block w-px bg-gray-300"></div>

                    <div className="flex md:flex-row flex-col md:space-x-3 md:space-y-0 space-y-3">
                        <div className="size-16 bg-primary rounded-lg flex items-center justify-center md:mx-0 mx-auto">
                            <AkarIconsPhone />
                        </div>
                        <div className='md:mx-0 mx-auto md:text-left text-center'>
                            <p className='text-primary font-medium text-lg'>Get in touch</p>
                            <p className='text-text1 font-semibold text-xl'>+94 77 604 4021</p>
                        </div>
                    </div>
                    {/* Vertical line */}
                    <div className="hidden md:block w-px bg-gray-300"></div>

                    <div className="flex md:flex-row flex-col md:space-x-3 md:space-y-0 space-y-3">
                        <div className="size-16 bg-primary rounded-lg flex items-center justify-center md:mx-0 mx-auto">
                            <AkarIconsLocation />
                        </div>
                        <div className='md:mx-0 mx-auto md:text-left text-center'>
                            <p className='text-primary font-medium text-lg'>Location</p>
                            <p className='text-text1 font-semibold text-xl'>Jaffna, Sri Lanka</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoreInfo;

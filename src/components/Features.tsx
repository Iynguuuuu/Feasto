
import type { SVGProps } from 'react';

export function OcticonRocket16(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 16 16" {...props}>
            <path fill="#e52d3c" d="M14.064 0h.186C15.216 0 16 .784 16 1.75v.186a8.75 8.75 0 0 1-2.564 6.186l-.458.459q-.472.471-.979.904v3.207c0 .608-.315 1.172-.833 1.49l-2.774 1.707a.75.75 0 0 1-1.11-.418l-.954-3.102a1 1 0 0 1-.145-.125L3.754 9.816a1 1 0 0 1-.124-.145L.528 8.717a.75.75 0 0 1-.418-1.11l1.71-2.774A1.75 1.75 0 0 1 3.31 4h3.204q.433-.508.904-.979l.459-.458A8.75 8.75 0 0 1 14.064 0M8.938 3.623h-.002l-.458.458c-.76.76-1.437 1.598-2.02 2.5l-1.5 2.317l2.143 2.143l2.317-1.5c.902-.583 1.74-1.26 2.499-2.02l.459-.458a7.25 7.25 0 0 0 2.123-5.127V1.75a.25.25 0 0 0-.25-.25h-.186a7.25 7.25 0 0 0-5.125 2.123M3.56 14.56c-.732.732-2.334 1.045-3.005 1.148a.23.23 0 0 1-.201-.064a.23.23 0 0 1-.064-.201c.103-.671.416-2.273 1.15-3.003a1.502 1.502 0 1 1 2.12 2.12m6.94-3.935q-.132.09-.266.175l-2.35 1.521l.548 1.783l1.949-1.2a.25.25 0 0 0 .119-.213ZM3.678 8.116L5.2 5.766q.087-.135.176-.266H3.309a.25.25 0 0 0-.213.119l-1.2 1.95ZM12 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></path>
        </svg>
    );
}
export function MdiGamesOutline(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24" {...props}><path fill="#e52d3c" d="M7.5 9H2v6h5.5l3-3zM6 13H4v-2h2zm9-5.5V2H9v5.5l3 3zM11 4h2v2h-2zM9 16.5V22h6v-5.5l-3-3zm4 3.5h-2v-2h2zm3.5-11l-3 3l3 3H22V9zm3.5 4h-2v-2h2z"></path></svg>);
}

export function MdiCommentFlashOutline(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24" {...props}><path fill="#e52d3c" d="M22.5 16h-2.2l1.7-4h-5v6h2v5zM15 18h-1.1l-3.7 3.7c-.2.2-.4.3-.7.3H9c-.6 0-1-.4-1-1v-3H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v6h-2V4H4v12h6v3.1l3.1-3.1H15z"></path></svg>);
}

export function StreamlineGraphBarIncreaseSolid(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 14 14" {...props}><path fill="#e52d3c" fillRule="evenodd" d="M9.997.22a.75.75 0 0 1 .819-.163l2.127.882a.75.75 0 0 1 .408.977l-.869 2.127a.75.75 0 0 1-1.386.006l-.343-.82L2.115 6.92a.75.75 0 1 1-.59-1.38l8.649-3.695l-.337-.805a.75.75 0 0 1 .16-.82m2.753 5.26a1 1 0 0 1 1 1v7a.5.5 0 0 1-.5.5h-2.5a.5.5 0 0 1-.5-.5v-7a1 1 0 0 1 1-1zM8.457 7.272a1 1 0 0 0-.707-.292h-1.5a1 1 0 0 0-1 1v5.5a.5.5 0 0 0 .5.5h2.5a.5.5 0 0 0 .5-.5v-5.5a1 1 0 0 0-.293-.708M2.75 8.48a1 1 0 0 1 1 1v4a.5.5 0 0 1-.5.5H.75a.5.5 0 0 1-.5-.5v-4a1 1 0 0 1 1-1z" clipRule="evenodd"></path></svg>);
}

const featureData = [
    {
        id: 1,
        imgSrc: "../../public/images/deliverygreen.svg",
        bgColor: "bg-green",
        title: "Deliveries completed",
        count: "85/day",
        mt: "-630px",
        ml: "460px",
        mdOnly: true,
    },
    {
        id: 2,
        imgSrc: "../../public/images/increase.svg",
        bgColor: "bg-yellow",
        title: "Total Customers",
        count: "10,456",
        mt: "-275px",
        ml: "150px",
        mdOnly: true,
    },
    {
        id: 3,
        imgSrc: "../../public/images/orders.svg",
        bgColor: "bg-red",
        title: "Orders Received",
        count: "124/day",
        mt: "-840px",
        ml: "280px",
        mdOnly: true,
    },
    {
        id: 4,
        imgSrc: "../../public/images/increase.svg",
        bgColor: "bg-yellow",
        title: "Orders Received",
        count: "124/day",
        mt: "-160px",
        ml: "20px",
        mdOnly: false,
    },
    {
        id: 5,
        imgSrc: "../../public/images/deliverygreen.svg",
        bgColor: "bg-green",
        title: "Orders Received",
        count: "124/day",
        mt: "-470px",
        ml: "160px",
        mdOnly: false,
    },
];

const Features = () => {
    return (
        <div className="relative md:mt-[0px] mt-[-30rem] mx-5 md:mx-24">
            <div className="relative flex md:flex-row flex-col-reverse md:justify-between space-y-8"> 
                <div>
                    <img
                        className="md:w-[613px] md:h-[813px] w-[400px] h-[450px]"
                        src="../../public/images/ImageCollection.png"
                        alt="features"
                    />
                    {featureData.map((feature) => (
                        <div
                            key={feature.id}
                            className={`absolute mt-[${feature.mt}] ml-[${feature.ml}] ${feature.mdOnly ? "md:block hidden" : "block md:hidden"} w-[160px] h-[52px] p-[10px] rounded-xl bg-white shadow-lg`}
                        >
                            <div className="flex flex-row space-x-3">
                                <div className={`size-[32px] ${feature.bgColor} rounded-md flex items-center justify-center`}>
                                    <img src={feature.imgSrc} alt={feature.title} />
                                </div>
                                <div className="mt-[-2px]">
                                    <p className="text-text2 text-[10px]">{feature.title}</p>
                                    <p className="text-text3 font-semibold text-[12px]">
                                        <span className="text-[18px] text-text1">{feature.count}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="md:w-[588px] md:h-[760px] w-[358px] h-[951px] text-left md:my-5"> 
                    <p className="text-primary md:text-[18px] text-[14px] font-medium">EXPLORE FEASTO</p>
                    <p className="text-text1 md:text-[52px] text-[36px] font-black">
                        How <span className="text-primary">FEASTO</span> help your business grow?
                    </p>
                    <div className='mt-10 space-y-5'>
                        <div>
                            <div className='flex flex-row space-x-5 '>
                                <OcticonRocket16 />
                                <div>
                                    <p className='text-[20px] text-text1 font-bold'>Launch your store in 3 mins</p>

                                </div>

                            </div>
                            <p className='text-[18px] text-text3 mt-4' >Easily launch your online store without coding and saving time.
                                Just choose a domain, add products, and start selling. It's that simple!</p>
                        </div>
                        <div>
                            <div className='flex flex-row space-x-5 '>
                                <MdiCommentFlashOutline />
                                <div>
                                    <p className='text-[20px] text-text1 font-bold'>Faster response time</p>

                                </div>

                            </div>
                            <p className='text-[18px] text-text3 mt-4' >Quickly respond to customer queries and orders through WhatsApp,
                                boosting customer satisfaction and loyalty.</p>
                        </div>
                        <div>
                            <div className='flex flex-row space-x-5 '>
                                <StreamlineGraphBarIncreaseSolid />
                                <div>
                                    <p className='text-[20px] text-text1 font-bold'>Increased visibility</p>

                                </div>

                            </div>
                            <p className='text-[18px] text-text3 mt-4' >Expand your reach beyond physical locations with an online storefront
                                that’s accessible 24/7.</p>
                        </div>
                        <div>
                            <div className='flex flex-row space-x-5 '>
                                <MdiGamesOutline />
                                <div>
                                    <p className='text-[20px] text-text1 font-bold'>Ultimate control over your storefront</p>

                                </div>

                            </div>
                            <p className='text-[18px] text-text3 mt-4' >You can set your own opening hours, define delivery zones and charges,
                                select payment methods and handle offers effortlessly.</p>
                        </div>





                    </div>

                </div>
            </div>
        </div>
    );
};

export default Features;

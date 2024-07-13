// Flowbite Card Component
const cardData = [
    {
        id: 1,
        imgSrc: '/card1.png',
        title: 'Restaurants & Food Businesses',
        description: 'Build an online store showcasing dishes with eye-catching images & easily update prices with our templates.',
        linkText: 'Get started now',
    },
    {
        id: 2,
        imgSrc: '/card2.png',
        title: 'Grocery Store',
        description: 'Get your grocery store online with a user-friendly design that enhances your customers\' shopping experience.',
        linkText: 'Get started now',
    },
    {
        id: 3,
        imgSrc: '/card3.png',
        title: 'Retail Store',
        description: 'Create a stunning showcase for your latest collections with our stylish templates and user-friendly interface.',
        linkText: 'Get started now',
    },
];

const Cards = () => {
    return (
        <div className="mt-12 flex md:space-x-6 md:flex-row flex-col md:space-y-0 space-y-6">
            {cardData.map(card => (
                <div key={card.id} className="max-w-sm h-[595px] bg-white rounded-lg shadow">
                    <img className="rounded-xl" src={card.imgSrc} alt={card.title} />
                    <div className="p-5">
                        <h5 className="mb-2 text-xl font-bold text-left text-text4">{card.title}</h5>
                        <p className="mb-3 mt-3 font-normal text-lg text-left text-text3">{card.description}</p>
                        <a href="">
                            <p className="text-primary font-semibold text-[16px] text-left mt-5">{card.linkText}</p>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;

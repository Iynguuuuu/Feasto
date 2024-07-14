// Research for this code: https://www.youtube.com/watch?v=oOXExNA8A48&ab_channel=CodeCommerce

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

interface Faq {
    question: string;
    answer: string;
    isEmail?: boolean;
}

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleFaqClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs: Faq[] = [
        {
            question: "How can FEASTO help me get my shop online?",
            answer: "If you’re thinking about selling a product online, all you’ll need to do is visit our website, sign up, and follow our easy step-by-step guide. Once you've done these steps, your shop is ready to go online! You can edit your products anytime, add new ones, or update details, then publish your changes instantly."
        },
        {
            question: "How secure is the FEASTO Ecommerce Website Builder?",
            answer: "We implement industry-standard security measures, including SSL encryption, secure payment gateways, and regular system updates, to ensure the protection of your online store and customer data."
        },
        {
            question: "Can I connect FEASTO with other tools and services?",
            answer: "Yes, FEASTO allows you to integrate with popular tools and services to enhance your online store. Connect seamlessly with email marketing platforms, analytics tools, and more to optimize your e-commerce experience."
        },
        {
            question: "To what extent can I customize the pre-designed template?",
            answer: "You can personalize the pre-designed template by adjusting the theme colors and layouts to match your store’s branding and style preferences."
        },
        {
            question: "What kind of payment methods does Feasto support?",
            answer: "Currently, FEASTO supports cash payments and bank deposits only. However, if you need other payment methods, we’ll add them at minimal cost based on what you prefer."
        },
        {
            question: "Is Feasto suitable for small businesses?",
            answer: "Feasto simplifies creating a stunning, professional web store with its user-friendly templates and quick setup. Our powerful features ensure a seamless experience."
        },
        {
            question: "Can I cancel my subscription at any time?",
            answer: "Absolutely! You can cancel your subscription at any time directly from your account settings. If you need assistance, please contact our customer support team at Hai@feasto.io.",
            isEmail: true
        }
    ];

    return (
        <div className="mt-8">
            {faqs.map((faq, index) => (
                <div key={index} className={`p-5 py-5 ${index === 0 ? 'rounded-t-lg' : ''} border-2`}>
                    <button
                        onClick={() => handleFaqClick(index)}
                        className="flex justify-between w-full">
                        <span className="text-text1 text-xl font-semibold text-left">{faq.question}</span>
                        {openIndex === index ? <span><FaMinus className="size-6 text-text1" /></span> : <span><FaPlus className="size-6 text-text1" /></span>}
                    </button>
                    <div className={`grid overflow-hidden transition-all duration-300 ease-in-out 
                    ${openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                        <div className="text-left overflow-hidden">
                            {faq.isEmail ? (
                                <p className="text-lg text-text3 mt-4">
                                    Absolutely! You can cancel your subscription at any time directly from your account settings. If you need assistance, please contact our customer support team at <span className='text-primary'>Hai@feasto.io</span>.
                                </p>
                            ) : (
                                <p className="text-lg text-text3 mt-4">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FaqSection;

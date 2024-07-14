
import PricingCards from "../components/PricingCards"
import { ToggButton } from "../components/ToggButton"



export const Pricing = () => {
    return (

        <div className="md:w-[80%] w-[90%] mx-auto mt-[8rem] flex items-center justify-center">
            <section id="Pricing">
                <div className="">

                    <div className="flex md:flex-row flex-col md:space-x-[340px]">
                        <div className="text-left">
                            <p className="text-[14px] md:text-[18px]  text-primary font-medium">PRICING & PLANS </p>
                            <p className="text-[36px] md:text-[52px] text-text1 font-black relative">
                                Perfect Balance <br /> of features & Affordability
                            </p>
                            <p className="md:w-[687px] mt-4 font-normal text-lg text-left text-text3">
                                Feasto simplifies creating a stunning, professional
                                web store with its<br className="" /> user-friendly templates and quick setup.
                                <br className="md:hidden block" />Our powerful features ensure a<br className="md:block hidden" /> seamless experience.</p>


                        </div>
                        {/* Toggle button */}
                        <div>
                            <ToggButton />
                        </div>
                    </div>


                    <div className="flex justify-center">
                        <PricingCards />
                    </div>
                </div>
            </section >
        </div >

    )
}

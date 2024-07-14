import FaqSection from "../components/FaqSection"


export const FAQ = () => {
    return (
        <section id="FAQ">
            <div className="w-[90%] mx-auto mt-[8rem] flex items-center justify-center ">
                <div className="text-center">
                    <p className="text-[14px] md:text-[18px] text-primary font-medium">FREQUENTLY ASKED QUESTIONS</p>
                    <p className="text-[36px] md:text-[52px] text-text1 font-black relative">
                        All you need to <br className="block md:hidden" /> know <br className="hidden md:block" />about<span className="text-primary">
                            <br className="block md:hidden" /> FEASTO</span>
                    </p>
                    <div className="md:w-[80%] md:ml-[20vh]">
                        <FaqSection />
                    </div>

                </div>
            </div>
        </section>
    )
}

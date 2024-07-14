import Cards from "../components/Cards"

export const Templates = () => {
    return (
        <section id="Templates">
            <div className="w-[90%] mx-auto mt-[8rem] flex items-center justify-center ">
                <div className="text-center">
                    <p className="text-[14px] md:text-[18px] text-primary font-medium">STARTER TEMPLATES</p>
                    <p className="text-[36px] md:text-[60px] text-text1 font-black relative">
                        <span className="hidden md:inline">Kickstart your online stores</span>
                        <span className="inline md:hidden">Kickstart your</span>
                        <br className="hidden md:block" />
                        <span className="inline md:hidden"><br />online stores</span>
                        <span className="hidden md:inline"> with amazing templates</span>
                        <span className="block md:hidden"> with beautiful</span>
                        <span className="block md:hidden"> Templates</span>

                    </p>

                    <Cards />

                </div>
            </div>
        </section>
    )
}

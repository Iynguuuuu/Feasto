import Features from "./pages/Features"
import { HomePage } from "./pages/HomePage"
import Navbar from "./components/NavBar"
import { Templates } from "./pages/Templates"
import { Pricing } from "./pages/Pricing"
import { FAQ } from "./pages/FAQ"
import MoreInfo from "./components/MoreInfo"
import FooterSection from "./pages/FooterSection"

const App = () => {

  return (
    <div className="overflow-x-hidden h-auto">
      <>
        <Navbar />
        <HomePage />

        <Features />
        <Templates />

        <Pricing />
        <FAQ />
        <MoreInfo />
        <FooterSection />

      </>
    </div>
  )
}

export default App
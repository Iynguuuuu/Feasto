import Features from "./pages/Features"
import { HomePage } from "./pages/HomePage"
import Navbar from "./components/NavBar"
import { Templates } from "./pages/Templates"
import { Pricing } from "./pages/Pricing"
import { FAQ } from "./pages/FAQ"

const App = () => {

  return (
    <div className="overflow-x-hidden h-[1500vh]">
      <>
        <Navbar />
        <HomePage />

        <Features />
        <Templates />
        <Pricing />
        <FAQ />
      </>
    </div>
  )
}

export default App
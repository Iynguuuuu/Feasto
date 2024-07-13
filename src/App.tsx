import Features from "./pages/Features"
import { HomePage } from "./pages/HomePage"
import Navbar from "./components/NavBar"
import { Templates } from "./pages/Templates"
import { Pricing } from "./pages/Pricing"

const App = () => {

  return (
    <div className="overflow-x-hidden h-[1000vh]">
      <>
        <Navbar />
        <HomePage />

        <Features />
        <Templates />
        <Pricing />

      </>
    </div>
  )
}

export default App
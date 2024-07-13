import Features from "./pages/Features"
import { HomePage } from "./pages/HomePage"
import Navbar from "./components/NavBar"
import { Templates } from "./pages/Templates"

const App = () => {

  return (
    <div className="overflow-x-hidden h-[600vh]">
      <>
        <Navbar />
        <HomePage />

        <Features />
        <Templates />

      </>
    </div>
  )
}

export default App
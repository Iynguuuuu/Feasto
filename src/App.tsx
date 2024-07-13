import Features from "./components/Features"
import { HomePage } from "./components/HomePage"
import Navbar from "./components/NavBar"
import { Templates } from "./components/Templates"

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
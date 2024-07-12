import Features from "./components/Features"
import { HomePage } from "./components/HomePage"
import Navbar from "./components/NavBar"

const App = () => {

  return (
    <div className="overflow-x-hidden">
      <>
        <Navbar />
        <HomePage />

        <Features />

      </>
    </div>
  )
}

export default App
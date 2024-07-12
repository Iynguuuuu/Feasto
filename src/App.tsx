import { HomePage } from "./components/HomePage"
import Navbar from "./components/NavBar"

const App = () => {

  return (
    <div className="overflow-x-hidden">
      <div>
        <Navbar />
        <HomePage />
      </div>
    </div>
  )
}

export default App
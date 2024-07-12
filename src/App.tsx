import Features from "./components/Features"
import { HomePage } from "./components/HomePage"
import Navbar from "./components/NavBar"

const App = () => {

  return (
    <div className="overflow-x-hidden">
      <>
        <Navbar />
        <HomePage />

        <div className='relative z-[30]'>
          <Features />

        </div>
      </>
    </div>
  )
}

export default App
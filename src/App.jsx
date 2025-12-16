import Navbar from "./Components/Navbar.jsx"
import Hero from "./Components/Hero.jsx"
import StatsSection from "./Components/StatsSection.jsx"
import Achievemastery from "./Components/Achievemastery.jsx"
import Coursesection from "./Coursesection.jsx"
import InstructorsSection from "./Components/InstructorsSection.jsx"
import Testimonials from "./Components/Testimonials.jsx"
import PricingSection from "./Components/PricingSection.jsx"
import Footer from "./Components/Footer.jsx"
function App() { 
  return (
  <div className="w-full overflow-x-hidden bg-white">
<Navbar/>
<Hero/>
<StatsSection/>
<Achievemastery/>
<Coursesection/>
<InstructorsSection/>
<Testimonials/>
<PricingSection/>
<Footer/>
</div>
  )
}

export default App

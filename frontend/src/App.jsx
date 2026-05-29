import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import FeaturedSection from './components/FeaturedSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import ExpertiseSection from './components/ExpertiseSection.jsx'
import ProgramsSection from './components/ProgramsSection.jsx'
import ProcessSection from './components/ProcessSection.jsx'

const App = () => {
  return (
    <main className="min-h-screen bg-[#f5f1eb]">
      <Navbar/>
      <HeroSection />
      <FeaturedSection />
      <AboutSection />
      <ExpertiseSection />
      <ProgramsSection />
      <ProcessSection />
    </main>
  )
}

export default App
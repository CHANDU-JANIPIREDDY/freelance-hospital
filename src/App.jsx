import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trust from './components/Trust'
import Specialties from './components/Specialties'
import Doctors from './components/Doctors'
import Technology from './components/Technology'
import FeaturedCare from './components/FeaturedCare'
import PatientJourney from './components/PatientJourney'
import Facilities from './components/Facilities'
import EmergencyCare from './components/EmergencyCare'
import AppointmentBooking from './components/AppointmentBooking'
import Testimonials from './components/Testimonials'
import HealthInsights from './components/HealthInsights'
import About from './components/About'
import Contact from './components/Contact'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Specialties />
        <Doctors />
        <Technology />
        <FeaturedCare />
        <PatientJourney />
        <Facilities />
        <EmergencyCare />
        <AppointmentBooking />
        <Testimonials />
        <HealthInsights />
        <About />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

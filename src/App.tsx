import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TrustAndStats from './components/TrustAndStats';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <TrustAndStats />
      <Testimonials />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;

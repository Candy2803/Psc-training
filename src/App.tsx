import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import Contact from './components/Contact';
import RegistrationModal from './components/RegistrationModal';
import { ModalProvider } from './context/ModalContext';

function App() {
  return (
    <ModalProvider>
      <div className="min-h-screen">
        <Hero />
        <Features />
        <CTA />
        <Contact />
        <RegistrationModal />
      </div>
    </ModalProvider>
  );
}

export default App;
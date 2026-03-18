import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ThemeToggle } from './components/ThemeToggle';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 font-sans selection:bg-brand-blue/30">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
      <ThemeToggle />
      <WhatsAppButton />
    </div>
  );
}

export default App;

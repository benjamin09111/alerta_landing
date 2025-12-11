
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { ProductShowcase } from './components/sections/ProductShowcase';
import { Features } from './components/sections/Features';
import { About } from './components/sections/About';


function App() {
  return (
    <div className="font-sans text-slate-900 bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
        <Features />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;

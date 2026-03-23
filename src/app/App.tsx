import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Students } from './pages/Students';
import { Memories } from './pages/Memories';
import { Timeline } from './pages/Timeline';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/students" element={<Students />} />
            <Route path="/memories" element={<Memories />} />
            <Route path="/timeline" element={<Timeline />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

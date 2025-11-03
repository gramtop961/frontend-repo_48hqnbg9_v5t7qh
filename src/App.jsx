import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import RoadmapShowcase from './components/RoadmapShowcase.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <RoadmapShowcase />
        <section id="subscribe" className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10">
            <h3 className="text-2xl sm:text-3xl font-bold">Join 250k+ developers learning together</h3>
            <p className="mt-2 text-slate-300">Get notified when new roadmaps and guides are published.</p>
            <form className="mt-6 mx-auto max-w-xl flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full flex-1 rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm placeholder-white/60 outline-none focus:ring-2 focus:ring-white/30"
              />
              <button className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-slate-100 transition">
                Subscribe Free
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

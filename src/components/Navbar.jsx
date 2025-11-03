import { useState } from 'react';
import { Menu, X, Rocket, Search } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 text-sm font-medium">
      <li><a href="#roadmaps" className="text-slate-600 hover:text-slate-900 transition">Roadmaps</a></li>
      <li><a href="#best-practices" className="text-slate-600 hover:text-slate-900 transition">Best Practices</a></li>
      <li><a href="#guides" className="text-slate-600 hover:text-slate-900 transition">Guides</a></li>
      <li><a href="#faq" className="text-slate-600 hover:text-slate-900 transition">FAQ</a></li>
    </ul>
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 backdrop-blur bg-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
              <Rocket size={18} />
            </span>
            <span className="text-lg font-semibold tracking-tight">Roadmap Clone</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <NavLinks />
            <div className="relative hidden lg:block">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search roadmaps..."
                className="pl-9 pr-3 py-2 w-64 rounded-md border border-slate-200 bg-white text-sm outline-none focus:ring-2 focus:ring-slate-300"
              />
            </div>
            <a
              href="#subscribe"
              className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition"
            >
              Subscribe
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="py-3 border-t border-slate-200 mt-2">
              <NavLinks />
            </div>
            <div className="mt-3 flex gap-3">
              <input
                type="text"
                placeholder="Search roadmaps..."
                className="flex-1 px-3 py-2 rounded-md border border-slate-200 bg-white text-sm outline-none focus:ring-2 focus:ring-slate-300"
              />
              <button className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white">
                Search
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

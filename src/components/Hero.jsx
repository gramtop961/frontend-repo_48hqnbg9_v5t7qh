import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
          <Sparkles size={14} className="text-yellow-500" />
          Curated learning paths for developers
        </div>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
          Build your career with community-driven roadmaps
        </h1>
        <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto">
          Explore step-by-step guides, best practices, and structured paths to master modern skills.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="text"
            placeholder="Search roadmaps, e.g. Frontend, DevOps, React..."
            className="w-full sm:w-[520px] px-4 py-3 rounded-lg border border-slate-200 bg-white shadow-sm outline-none focus:ring-2 focus:ring-slate-300"
          />
          <button className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition">
            Start Exploring
          </button>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {['Frontend', 'Backend', 'DevOps', 'AI/ML', 'Blockchain', 'Mobile'].map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-full border border-slate-200 bg-white text-xs text-slate-600">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

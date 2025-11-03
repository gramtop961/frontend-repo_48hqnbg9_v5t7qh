import { useState } from 'react';
import { Code, Server, Database, Cloud, Shield, GitBranch, Wrench, BookText, LayoutGrid, BadgeCheck } from 'lucide-react';

const tabs = [
  { id: 'roadmaps', label: 'Developer Roadmaps' },
  { id: 'best-practices', label: 'Best Practices' },
  { id: 'guides', label: 'Guides & Checklists' },
];

const content = {
  roadmaps: [
    { title: 'Frontend Developer', icon: Code, color: 'from-fuchsia-500 to-pink-500' },
    { title: 'Backend Developer', icon: Server, color: 'from-violet-500 to-indigo-500' },
    { title: 'DevOps Engineer', icon: Cloud, color: 'from-cyan-500 to-blue-500' },
    { title: 'Database Administrator', icon: Database, color: 'from-emerald-500 to-teal-500' },
    { title: 'Security Engineer', icon: Shield, color: 'from-rose-500 to-orange-500' },
    { title: 'Full-Stack Developer', icon: LayoutGrid, color: 'from-amber-500 to-yellow-500' },
  ],
  'best-practices': [
    { title: 'Git & Collaboration', icon: GitBranch, color: 'from-sky-500 to-indigo-500' },
    { title: 'API Design', icon: Wrench, color: 'from-teal-500 to-green-500' },
    { title: 'Security Basics', icon: Shield, color: 'from-red-500 to-orange-500' },
    { title: 'Code Reviews', icon: BadgeCheck, color: 'from-purple-500 to-pink-500' },
    { title: 'Testing Strategy', icon: Wrench, color: 'from-emerald-500 to-teal-500' },
    { title: 'Database Schema Design', icon: Database, color: 'from-amber-500 to-yellow-500' },
  ],
  guides: [
    { title: 'System Design Basics', icon: BookText, color: 'from-indigo-500 to-blue-500' },
    { title: 'Clean Architecture', icon: LayoutGrid, color: 'from-fuchsia-500 to-pink-500' },
    { title: 'Docker Essentials', icon: Cloud, color: 'from-cyan-500 to-sky-500' },
    { title: 'TypeScript Handbook', icon: Code, color: 'from-blue-500 to-indigo-500' },
    { title: 'Frontend Performance', icon: Code, color: 'from-rose-500 to-orange-500' },
    { title: 'SQL Playbook', icon: Database, color: 'from-emerald-500 to-lime-500' },
  ],
};

function Card({ title, Icon, color }) {
  return (
    <a href="#" className="group block rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition">
      <div className={`h-12 w-12 rounded-lg bg-gradient-to-br ${color} text-white flex items-center justify-center shadow-sm`}>
        <Icon size={22} />
      </div>
      <div className="mt-4 flex items-start justify-between">
        <h3 className="text-base font-semibold text-slate-900 group-hover:text-slate-950">{title}</h3>
        <span className="ml-3 inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 border border-emerald-200">
          Updated
        </span>
      </div>
      <p className="mt-1 text-sm text-slate-600">
        Step-by-step path with resources and milestones.
      </p>
    </a>
  );
}

export default function RoadmapShowcase() {
  const [active, setActive] = useState('roadmaps');
  const items = content[active];

  return (
    <section id="roadmaps" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Explore</h2>
            <p className="mt-2 text-slate-600">Pick a track and start learning with a clear plan.</p>
          </div>
          <div className="inline-flex rounded-lg border border-slate-200 bg-white p-1">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-md transition ${
                  active === t.id
                    ? 'bg-slate-900 text-white shadow'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ title, icon: Icon, color }) => (
            <Card key={title} title={title} Icon={Icon} color={color} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#" className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
            Browse all
          </a>
        </div>
      </div>
    </section>
  );
}

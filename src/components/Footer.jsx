export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="text-slate-900 font-semibold">Roadmaps</h4>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Frontend</a></li>
              <li><a href="#" className="hover:text-slate-900">Backend</a></li>
              <li><a href="#" className="hover:text-slate-900">DevOps</a></li>
              <li><a href="#" className="hover:text-slate-900">Android</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 font-semibold">Resources</h4>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Guides</a></li>
              <li><a href="#" className="hover:text-slate-900">Best Practices</a></li>
              <li><a href="#" className="hover:text-slate-900">Checklists</a></li>
              <li><a href="#" className="hover:text-slate-900">Community</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">About</a></li>
              <li><a href="#" className="hover:text-slate-900">Blog</a></li>
              <li><a href="#" className="hover:text-slate-900">Contact</a></li>
              <li><a href="#" className="hover:text-slate-900">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 font-semibold">Stay Updated</h4>
            <p className="mt-3 text-slate-600">Get monthly updates on new roadmaps.</p>
            <form className="mt-3 flex gap-2">
              <input type="email" placeholder="Your email" className="flex-1 rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300" />
              <button className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Roadmap Clone. All rights reserved.</p>
          <p>Built for learning and inspiration.</p>
        </div>
      </div>
    </footer>
  );
}

import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Sample Tailwind Grid
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-zinc-200">
              Responsive cards using <code className="text-zinc-200">grid</code>,
              <code className="text-zinc-200">gap</code>, and breakpoint-based
              column utilities.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              onClick={() => setCount((c) => c + 1)}
            >
              Clicks: {count}
            </button>
            <span className="text-xs text-zinc-300">State example</span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Dashboard',
              tag: 'Overview',
              desc: 'A compact summary panel with key metrics and trends.',
            },
            {
              title: 'Activity',
              tag: 'Timeline',
              desc: 'Latest events in a clean, scan-friendly feed layout.',
            },
            {
              title: 'Projects',
              tag: 'Work',
              desc: 'Cards that scale from 1 to 3 columns by breakpoint.',
            },
            {
              title: 'Messages',
              tag: 'Inbox',
              desc: 'A common card pattern: heading, meta, and actions.',
            },
            {
              title: 'Settings',
              tag: 'Preferences',
              desc: 'Use subtle borders, blur, and hover states for depth.',
            },
            {
              title: 'Billing',
              tag: 'Account',
              desc: 'Try swapping lg:grid-cols-3 for lg:grid-cols-4, etc.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur transition hover:border-white/20 hover:bg-white/10"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-base font-semibold text-zinc-100">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-xs text-zinc-400">{item.tag}</p>
                </div>
                <div className="rounded-full bg-white/10 px-2 py-1 text-[10px] font-medium text-zinc-200">
                  New
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-zinc-300">
                {item.desc}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-900 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                >
                  View details
                </button>
                <span className="text-xs text-zinc-400 group-hover:text-zinc-300">
                  Updated just now
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App

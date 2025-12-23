import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const root = document.documentElement
    const current = root.getAttribute('data-theme')
    return current === 'light' ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div className="min-h-screen">
      <div className="tw-container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Sample Tailwind Grid
            </h1>
            <p className="mt-2 max-w-2xl text-sm" style={{ color: 'rgb(var(--muted))' }}>
              Responsive cards using <code className="font-medium">grid</code>,
              <code className="font-medium">gap</code>, and breakpoint-based
              column utilities.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="tw-btn"
              onClick={() => setCount((c) => c + 1)}
            >
              Clicks: {count}
            </button>
            <button
              type="button"
              className="tw-btn tw-btn-sm"
              onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            >
              Theme: {theme}
            </button>
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
              className="tw-card group"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-base font-semibold">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-xs" style={{ color: 'rgb(var(--muted))' }}>
                    {item.tag}
                  </p>
                </div>
                <div
                  className="rounded-full px-2 py-1 text-[10px] font-medium"
                  style={{
                    backgroundColor: 'rgb(var(--fg) / 0.08)',
                    color: 'rgb(var(--fg))',
                  }}
                >
                  New
                </div>
              </div>

              <p className="mt-4 text-sm leading-6" style={{ color: 'rgb(var(--fg) / 0.9)' }}>
                {item.desc}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <button
                  type="button"
                  className="tw-btn tw-btn-sm"
                >
                  View details
                </button>
                <span className="text-xs" style={{ color: 'rgb(var(--muted))' }}>
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

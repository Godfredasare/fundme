const steps = [
  { num: "01", emoji: "✍️", title: "Create account",  desc: "Sign up with your email and pick a unique username." },
  { num: "02", emoji: "🎨", title: "Build your page", desc: "Add photo, bio, social links, and set a funding goal." },
  { num: "03", emoji: "🔗", title: "Share your link", desc: "Paste your link in your bio, email, or anywhere online." },
  { num: "04", emoji: "💰", title: "Get supported",   desc: "Receive donations and coffee tips directly to you." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-3">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight mb-3">
            Four steps to funded
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-md">
            No code, no complexity. Just a clean page your supporters will love.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-100 border border-gray-200 rounded-xl overflow-hidden">
          {steps.map((s, i) => (
            <div key={s.num} className="p-6 bg-white">
              {/* Number + connector */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-medium text-gray-300 tabular-nums">{s.num}</span>
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block flex-1 h-px"
                    style={{
                      background:
                        "repeating-linear-gradient(90deg, #e5e7eb 0, #e5e7eb 4px, transparent 4px, transparent 8px)",
                    }}
                  />
                )}
              </div>

              {/* Icon */}
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg mb-4 border ${
                i === 0
                  ? "bg-blue-50 border-blue-100"
                  : "bg-gray-50 border-gray-100"
              }`}>
                {s.emoji}
              </div>

              <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
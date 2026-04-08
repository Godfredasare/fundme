const steps = [
  { num: "01", emoji: "✍️", title: "Create account",  desc: "Sign up with your email and pick a unique username." },
  { num: "02", emoji: "🎨", title: "Build your page", desc: "Add photo, bio, social links, and set a funding goal." },
  { num: "03", emoji: "🔗", title: "Share your link", desc: "Paste your link in your bio, email, or anywhere online." },
  { num: "04", emoji: "💰", title: "Get supported",   desc: "Receive donations and coffee tips directly to you." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <p className="text-xs font-semibold text-sky-600 uppercase tracking-widest mb-2">How it works</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Four steps to funded</h2>
          <p className="text-gray-500 max-w-lg">No code, no complexity. Just a clean page your supporters will love.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div key={s.num} className="card card-body relative">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-mono font-bold text-gray-300">{s.num}</span>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block flex-1 h-px border-t border-dashed border-gray-200" />
                )}
              </div>
              <div className="text-2xl mb-3">{s.emoji}</div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
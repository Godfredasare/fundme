import { Link } from "react-router-dom";
import { ArrowRight, Coffee, Heart, Plus, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-white border-b border-gray-100 overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Radial fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, transparent 30%, white 100%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Copy ── */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 text-gray-500 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Live across Africa &nbsp;·&nbsp; Powered by Paystack
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 tracking-tight leading-[1.15] mb-5">
              The easiest way<br />
              to fund{" "}
              <span className="text-blue-600">your passion</span>
            </h1>

            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
              Accept donations and tips from your audience — one clean,
              shareable profile page. No monthly fees, no fuss.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                to="/register"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
              >
                <ArrowRight className="h-4 w-4" />
                Create your page
              </Link>
              <Link
                to="/u/demo"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 text-sm font-medium px-5 py-2.5 rounded-lg border border-gray-200 transition-colors"
              >
                <Coffee className="h-4 w-4" />
                See live example
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 mb-6">
              {[
                { value: "10,000+", label: "Creators" },
                { value: "GH₵ 2M+", label: "Raised" },
                { value: "50,000+", label: "Coffees sent" },
              ].map((s, i) => (
                <div key={s.label} className="flex items-center gap-8">
                  {i > 0 && <div className="w-px h-7 bg-gray-200" />}
                  <div>
                    <div className="text-base font-semibold text-gray-900">{s.value}</div>
                    <div className="text-xs text-gray-400">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust line */}
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Star className="h-3 w-3" />
              No monthly fees
              <span className="text-gray-200">·</span>
              Secure Paystack payments
              <span className="text-gray-200">·</span>
              Set up in 2 minutes
            </div>
          </div>

          {/* ── Right: Profile card ── */}
          <div className="relative">
            {/* Floating notification — top */}
            <div className="absolute -top-4 right-8 z-10 hidden sm:flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-3 py-2.5 shadow-sm">
              <div className="w-7 h-7 rounded-md bg-green-50 flex items-center justify-center flex-shrink-0">
                <Plus className="h-3.5 w-3.5 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-400">New donation</p>
                <p className="text-xs font-semibold text-gray-800">GH₵ 50 received</p>
              </div>
            </div>

            {/* Profile card */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              {/* Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-semibold text-base flex-shrink-0">
                  K
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Kofi Mensah</p>
                  <p className="text-xs text-gray-400">Music Producer · Accra</p>
                </div>
              </div>

              <p className="text-sm text-gray-500 pb-4 mb-4 border-b border-gray-100 leading-relaxed">
                Help me produce my debut album and share Ghanaian music with the world.
              </p>

              {/* Progress */}
              <div className="mb-4">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-gray-500">GH₵ 3,200 raised</span>
                  <span className="text-blue-600 font-semibold">64%</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full border border-gray-200 overflow-hidden">
                  <div className="h-full w-[64%] bg-blue-600 rounded-full" />
                </div>
                <p className="text-xs text-gray-400 mt-1.5">
                  of GH₵ 5,000 goal · 38 supporters
                </p>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-2">
                <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-2.5 rounded-lg transition-colors">
                  <Heart className="h-3.5 w-3.5" />
                  Donate
                </button>
                <button className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 text-xs font-medium py-2.5 rounded-lg border border-gray-200 transition-colors">
                  <Coffee className="h-3.5 w-3.5" />
                  Send a coffee
                </button>
              </div>
            </div>

            {/* Floating notification — bottom */}
            <div className="absolute -bottom-4 left-6 z-10 hidden sm:flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-3 py-2.5 shadow-sm">
              <div className="w-7 h-7 rounded-md bg-amber-50 flex items-center justify-center flex-shrink-0">
                <Coffee className="h-3.5 w-3.5 text-amber-600" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Ama A. just sent</p>
                <p className="text-xs font-semibold text-gray-800">3 coffees</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
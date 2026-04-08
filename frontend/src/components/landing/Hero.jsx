import { Link } from "react-router-dom";
import { ArrowRight, Coffee, Heart } from "lucide-react";
import AppButton from "../ui/AppButton";

export default function Hero() {
  return (
    <section className="relative bg-white border-b border-gray-100 overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e4e7ec_1px,transparent_1px)] [background-size:20px_20px] opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/60 to-white pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-20 pb-24">
        <div className="max-w-2xl mx-auto text-center">

          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-medium px-3 py-1 rounded-full mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
            Live across Africa · Powered by Paystack
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-5">
            The easiest way to fund{" "}
            <span className="text-sky-500">your passion</span>
          </h1>

          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg mx-auto">
            Accept donations and coffee tips from your audience — one clean, shareable profile page. No monthly fees.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
            <Link to="/register">
              <AppButton size="lg" iconRight={ArrowRight}>
                Create your page
              </AppButton>
            </Link>
            <Link to="/u/demo">
              <AppButton variant="secondary" size="lg" icon={Coffee}>
                See live example
              </AppButton>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 divide-x divide-gray-100 border border-gray-100 rounded-xl overflow-hidden bg-white shadow-xs max-w-md mx-auto">
            {[
              { emoji: "👥", value: "10,000+", label: "Creators" },
              { emoji: "💰", value: "GH₵2M+",  label: "Raised" },
              { emoji: "☕", value: "50,000+",  label: "Coffees" },
            ].map((s) => (
              <div key={s.label} className="py-4 text-center">
                <div className="text-lg mb-0.5">{s.emoji}</div>
                <div className="text-sm font-bold text-gray-900">{s.value}</div>
                <div className="text-xs text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile preview card */}
        <div className="mt-16 max-w-xs mx-auto card shadow-lg animate-slide-up">
          <div className="card-body space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center text-white font-bold">K</div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Kofi Mensah</p>
                <p className="text-xs text-gray-400">Music Producer · Accra</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">Help me produce my debut album 🎵</p>
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-gray-400">GH₵ 3,200 raised</span>
                <span className="font-semibold text-sky-600">64%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill w-[64%]" />
              </div>
              <p className="text-xs text-gray-400 mt-1">of GH₵ 5,000 goal</p>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button className="btn-primary btn-sm justify-center">
                <Heart className="h-3.5 w-3.5" /> Donate
              </button>
              <button className="btn-secondary btn-sm justify-center">
                <Coffee className="h-3.5 w-3.5" /> Coffee
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
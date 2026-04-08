import { Heart, Coffee, BarChart3, Share2, Shield, Zap } from "lucide-react";

const features = [
  { icon: Heart,     title: "Donation goals",   desc: "Set a funding target, show progress, and let supporters rally around your mission.",         color: "text-rose-500",   bg: "bg-rose-50"   },
  { icon: Coffee,    title: "Coffee tips",       desc: "Quick GH₵5 tips in 1, 3, or 5 cup amounts — casual support made effortless.",               color: "text-amber-500",  bg: "bg-amber-50"  },
  { icon: BarChart3, title: "Live dashboard",    desc: "Track every transaction, supporter, and milestone in real time.",                            color: "text-sky-500",    bg: "bg-sky-50"    },
  { icon: Share2,    title: "Shareable page",    desc: "Your own link at fundme.app/u/you — drop it anywhere your audience finds you.",              color: "text-violet-500", bg: "bg-violet-50" },
  { icon: Shield,    title: "Paystack secured",  desc: "Every payment is handled by Africa's most trusted payment infrastructure.",                  color: "text-green-500",  bg: "bg-green-50"  },
  { icon: Zap,       title: "2-minute setup",    desc: "Sign up, fill in your profile, and start receiving support in minutes.",                     color: "text-orange-500", bg: "bg-orange-50" },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <p className="text-xs font-semibold text-sky-600 uppercase tracking-widest mb-2">Features</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Built for creators, not accountants</h2>
          <p className="text-gray-500 max-w-lg">Simple tools that get out of your way so you can focus on what you do best.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div key={f.title}
              className="card card-body group hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <div className={`inline-flex p-2 rounded-lg ${f.bg} mb-4`}>
                <f.icon className={`h-5 w-5 ${f.color}`} strokeWidth={1.75} />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
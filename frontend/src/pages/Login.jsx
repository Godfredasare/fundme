import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Coffee, ArrowRight } from "lucide-react";
import { loginUser } from "../api/auth";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../hooks/useToast";
import InputField from "../components/ui/InputField";
import AppButton from "../components/ui/AppButton";

export default function Login() {
  const { login } = useAuth();
  const { success, error } = useToast();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading]   = useState(false);
  const [form, setForm] = useState({ identifier: "", password: "" });

  const set = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await loginUser(form);
      login(res.data.token, res.data.user);
      success("Welcome back!");
      navigate("/dashboard");
    } catch (err) {
      error(err.response?.data?.error || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-[1fr_480px]">
      {/* Left — testimonials */}
      <div className="hidden lg:flex flex-col justify-between bg-gray-900 px-12 py-10">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-sky-500 rounded-lg flex items-center justify-center">
            <Coffee className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-white font-semibold text-sm">FundMe</span>
        </Link>

        <div className="space-y-3 max-w-sm">
          <p className="text-gray-400 text-xs uppercase tracking-widest font-medium mb-5">
            What creators say
          </p>
          {[
            { name: "Ama Owusu",     role: "Visual Artist",  raised: "GH₵8,750", quote: "I funded my entire studio through FundMe. Setup took 4 minutes." },
            { name: "Kofi Mensah",   role: "Music Producer", raised: "GH₵4,200", quote: "My fans love how simple it is. I get coffees daily." },
            { name: "Kwame Asante",  role: "Podcaster",      raised: "GH₵2,100", quote: "Clean, fast, and my audience trusts the Paystack integration." },
          ].map((t) => (
            <div key={t.name} className="border border-white/10 bg-white/5 rounded-xl p-4 space-y-3">
              <p className="text-gray-300 text-sm leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white text-xs font-medium">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
                <span className="badge-green">{t.raised}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-gray-600 text-xs">© {new Date().getFullYear()} FundMe</p>
      </div>

      {/* Right — form */}
      <div className="flex items-center justify-center bg-white px-6 py-12">
        <div className="w-full max-w-sm animate-slide-up">
          <Link to="/" className="flex items-center gap-2 mb-10 lg:hidden">
            <div className="w-7 h-7 bg-sky-500 rounded-lg flex items-center justify-center">
              <Coffee className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-semibold text-sm">FundMe</span>
          </Link>

          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Sign in</h1>
            <p className="text-sm text-gray-500">
              No account?{" "}
              <Link to="/register" className="btn-link text-sky-500">Create one free</Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <InputField
              label="Email or username"
              name="identifier"
              value={form.identifier}
              onChange={set}
              placeholder="you@example.com"
              autoComplete="username"
              required
            />
            <InputField
              label="Password"
              name="password"
              type={showPass ? "text" : "password"}
              value={form.password}
              onChange={set}
              placeholder="••••••••"
              autoComplete="current-password"
              required
              suffix={
                <button type="button" onClick={() => setShowPass(s => !s)}
                  className="text-gray-400 hover:text-gray-600 transition-colors">
                  {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              }
            />
            <AppButton type="submit" size="lg" loading={loading} iconRight={ArrowRight} className="w-full mt-2">
              Sign in
            </AppButton>
          </form>
        </div>
      </div>
    </div>
  );
}
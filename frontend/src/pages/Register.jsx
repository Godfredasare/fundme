import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Coffee, ArrowRight, Check } from "lucide-react";
import { registerUser } from "../api/auth";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../hooks/useToast";
import InputField from "../components/ui/InputField";
import AppButton from "../components/ui/AppButton";

const perks = [
  "Free to set up — no monthly fees",
  "Accept donations & coffee tips",
  "Paystack-powered secure payments",
  "Your own shareable profile link",
];

export default function Register() {
  const { login } = useAuth();
  const { success, error } = useToast();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading]   = useState(false);
  const [form, setForm] = useState({ full_name: "", username: "", email: "", password: "" });

  const set = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await registerUser(form);
      login(res.data.token, res.data.user);
      success("Account created!");
      navigate("/dashboard");
    } catch (err) {
      error(err.response?.data?.error || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-[1fr_480px]">
      {/* Left */}
      <div className="hidden lg:flex flex-col justify-between bg-sky-500 px-12 py-10">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center">
            <Coffee className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-white font-semibold text-sm">FundMe</span>
        </Link>

        <div className="max-w-sm">
          <h2 className="text-3xl font-bold text-white leading-tight mb-4">
            Start receiving support from your audience today
          </h2>
          <p className="text-sky-100 text-sm leading-relaxed mb-8">
            Thousands of African creators use FundMe to turn passion into income — music, art, podcasts, and more.
          </p>
          <ul className="space-y-3">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                  <Check className="h-3 w-3 text-white" strokeWidth={2.5} />
                </div>
                <span className="text-sky-50 text-sm">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-sky-200 text-xs">© {new Date().getFullYear()} FundMe</p>
      </div>

      {/* Right */}
      <div className="flex items-center justify-center bg-white px-6 py-12">
        <div className="w-full max-w-sm animate-slide-up">
          <Link to="/" className="flex items-center gap-2 mb-10 lg:hidden">
            <div className="w-7 h-7 bg-sky-500 rounded-lg flex items-center justify-center">
              <Coffee className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-semibold text-sm">FundMe</span>
          </Link>

          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Create your account</h1>
            <p className="text-sm text-gray-500">
              Already signed up?{" "}
              <Link to="/login" className="btn-link text-sky-500">Sign in</Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <InputField label="Full name" name="full_name" value={form.full_name}
              onChange={set} placeholder="John Doe" required />

            <InputField label="Username" name="username" value={form.username}
              onChange={set} placeholder="johndoe" required prefix="@"
              hint={form.username ? `fundme.app/u/${form.username}` : undefined} />

            <InputField label="Email" name="email" type="email" value={form.email}
              onChange={set} placeholder="you@example.com" required />

            <InputField label="Password" name="password"
              type={showPass ? "text" : "password"} value={form.password}
              onChange={set} placeholder="Min. 6 characters" required
              suffix={
                <button type="button" onClick={() => setShowPass(s => !s)}
                  className="text-gray-400 hover:text-gray-600 transition-colors">
                  {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              }
            />

            <AppButton type="submit" size="lg" loading={loading} iconRight={ArrowRight} className="w-full mt-1">
              Create account
            </AppButton>

            <p className="text-xs text-gray-400 text-center">
              By signing up you agree to our{" "}
              <a href="#" className="underline hover:text-gray-600">Terms</a> and{" "}
              <a href="#" className="underline hover:text-gray-600">Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
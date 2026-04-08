import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AppButton from "../ui/AppButton";

export default function CTASection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-sky-500 rounded-2xl px-8 py-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1),transparent_60%)]" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-3">
              Ready to start receiving support?
            </h2>
            <p className="text-sky-100 text-sm mb-8 max-w-md mx-auto">
              Join creators across Africa who use FundMe to turn their passion into income.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/register">
                <AppButton
                  variant="secondary"
                  size="lg"
                  iconRight={ArrowRight}
                  className="bg-white text-sky-600 hover:bg-sky-50 border-white"
                >
                  Create your page
                </AppButton>
              </Link>
              <Link to="/login"
                className="text-sky-100 hover:text-white text-sm font-medium underline underline-offset-4 transition-colors">
                Already have an account? Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Link } from "react-router-dom";
import { Coffee } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-sky-500 rounded-md flex items-center justify-center">
              <Coffee className="h-3 w-3 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-sm font-semibold text-gray-700">FundMe</span>
          </Link>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} FundMe · Built for African creators
          </p>
          <div className="flex items-center gap-4">
            {["Privacy", "Terms", "Help"].map((l) => (
              <a key={l} href="#"
                className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch {
      setError("Email atau password salah.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-purple-200 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/60 backdrop-blur-lg border border-white/30 rounded-3xl shadow-2xl p-10 relative">
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-8">
          Admin Login
        </h2>

        {error && (
          <div className="mb-6 p-3 bg-red-50 text-red-700 border border-red-200 rounded-lg text-sm text-center shadow-sm">
            {error}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-100 text-sm text-gray-800 bg-white/80"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-800 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-100 text-sm text-gray-800 bg-white/80 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700 text-lg"
              >
                <i className={showPassword ? "ri-eye-off-line" : "ri-eye-line"}></i>
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 rounded-lg font-semibold text-white transition duration-200 ${
              loading
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-gray-600 hover:bg-gray-700 shadow-md"
            }`}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} Fatkhurrhn. All rights reserved.
        </p>
      </div>
    </div>
  );
}

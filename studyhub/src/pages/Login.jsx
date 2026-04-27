import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [localError, setLocalError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login, error: authError } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError('');

    if (!email || !password) {
      setLocalError('Please fill in all fields');
      return;
    }

    setLoading(true);

    try {
      const result = await login(email, password);

      if (result.success) {
        navigate('/domains');
      } else {
        setLocalError(result.error || 'Login failed');
      }
    } catch (err) {
      setLocalError(err.message || 'An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md animate-fadeInUp">

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">

          {/* HEADER */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-blue-100">Sign in to access your learning dashboard</p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">

            {(localError || authError) && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                {localError || authError}
              </div>
            )}

            {/* EMAIL */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              disabled={loading}
              className="w-full px-4 py-3 border rounded-lg"
            />

            {/* PASSWORD */}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              disabled={loading}
              className="w-full px-4 py-3 border rounded-lg"
            />

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>

            {/* DEMO BUTTON */}
            <button
              type="button"
              onClick={() => {
                setEmail('demo@example.com');
                setPassword('demo123');
              }}
              disabled={loading}
              className="w-full py-3 border rounded-lg"
            >
              Try Demo Login
            </button>

          </form>

          {/* FOOTER */}
          <div className="px-8 py-4 bg-gray-50 text-center">
            <p>
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-600 font-bold">
                Sign up here
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
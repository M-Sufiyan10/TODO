import React from 'react'

const Login = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/10 shadow-2xl p-8">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-semibold text-white">Welcome back</h1>
            <p className="mt-1 text-sm text-white/60">Please sign in to continue</p>
          </div>

          <form className="space-y-5">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/80">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-white text-black placeholder:text-neutral-500 border border-black/10 shadow-sm outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/80">Password</label>
              <input
                type="password"
                placeholder="Your password"
                className="w-full px-4 py-3 rounded-xl bg-white text-black placeholder:text-neutral-500 border border-black/10 shadow-sm outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            <button
              type="button"
              className="w-full px-4 py-3 rounded-xl bg-gradient-to-br from-sky-500 via-sky-600 to-blue-600 text-white font-semibold shadow-md hover:shadow-lg hover:brightness-110 active:scale-[0.98] transition-all border border-white/10"
            >
              Log In
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-white/70">
            Not registered?
            <a href="/signup" className="ml-1 text-sky-300 hover:text-sky-200 underline underline-offset-4">
              Create an account
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
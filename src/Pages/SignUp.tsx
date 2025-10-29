import React from 'react'

const Signup = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/10 shadow-2xl p-8">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-semibold text-white">Create your account</h1>
            <p className="mt-1 text-sm text-white/60">Join us by filling in the information below</p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/80">First name</label>
              <input
                type="text"
                placeholder="John"
                className="w-full px-4 py-3 rounded-xl bg-white text-black placeholder:text-neutral-500 border border-black/10 shadow-sm outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/80">Last name</label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full px-4 py-3 rounded-xl bg-white text-black placeholder:text-neutral-500 border border-black/10 shadow-sm outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
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
                placeholder="Create a password"
                className="w-full px-4 py-3 rounded-xl bg-white text-black placeholder:text-neutral-500 border border-black/10 shadow-sm outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/80">Confirm password</label>
              <input
                type="password"
                placeholder="Re-enter your password"
                className="w-full px-4 py-3 rounded-xl bg-white text-black placeholder:text-neutral-500 border border-black/10 shadow-sm outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/80">Contact number</label>
              <input
                type="tel"
                placeholder="+1 555 123 4567"
                className="w-full px-4 py-3 rounded-xl bg-white text-black placeholder:text-neutral-500 border border-black/10 shadow-sm outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/80">Age</label>
              <input
                type="number"
                placeholder="18"
                className="w-full px-4 py-3 rounded-xl bg-white text-black placeholder:text-neutral-500 border border-black/10 shadow-sm outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            <div className="md:col-span-2 mt-2">
              <button
                type="button"
                className="w-full px-4 py-3 rounded-xl bg-gradient-to-br from-sky-500 via-sky-600 to-blue-600 text-white font-semibold shadow-md hover:shadow-lg hover:brightness-110 active:scale-[0.98] transition-all border border-white/10"
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-white/70">
            Already registered?
            <a href="/login" className="ml-1 text-sky-300 hover:text-sky-200 underline underline-offset-4">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
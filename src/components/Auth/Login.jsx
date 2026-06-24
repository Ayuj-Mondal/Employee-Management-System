import React, { useState } from 'react'

const Login = ({ HandleLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    HandleLogin(email, password)
    setEmail('')
    setPassword('')
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-slate-50 dark:bg-slate-900 px-4'>
      
      <div className='w-full max-w-md bg-white dark:bg-slate-800 p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700/50'>
        
        {/* Header Section */}
        <div className='text-center mb-8'>
          <h2 className='text-3xl font-bold text-slate-800 dark:text-white tracking-tight'>
            Welcome Back
          </h2>
          <p className='text-sm text-slate-500 dark:text-slate-400 mt-2'>
            Log in to manage your EMS dashboard
          </p>
        </div>

        <form onSubmit={submitHandler} className='flex flex-col gap-4'>
          
          {/* Email Input Field */}
          <div className='flex flex-col gap-1.5'>
            <label className='text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider'>
              Email Address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full outline-none bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 rounded-xl py-3 px-4 text-base text-slate-800 dark:text-slate-100 placeholder:text-slate-400 transition-all duration-200'
              type="email"
              placeholder='name@company.com'
              required
            />
          </div>

          {/* Password Input Field */}
          <div className='flex flex-col gap-1.5'>
            <label className='text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider'>
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full outline-none bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 rounded-xl py-3 px-4 text-base text-slate-800 dark:text-slate-100 placeholder:text-slate-400 transition-all duration-200'
              type="password"
              placeholder='••••••••'
              required
            />
          </div>

          {/* Submit Button */}
          <button className='mt-2 w-full text-white font-medium bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] focus:ring-4 focus:ring-emerald-500/20 py-3 px-5 rounded-xl transition-all duration-150 shadow-lg shadow-emerald-600/10'>
            Sign In
          </button>

        </form>

      </div>

    </div>
  )
}

export default Login
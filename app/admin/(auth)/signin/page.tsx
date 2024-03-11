'use client'

import { useState } from 'react'
import Link from 'next/link'
import AuthHeader from '../auth-header'
import AuthImage from '../auth-image'
import { useSession, signIn } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function SignIn() {
  const { data: session, status } = useSession()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  //console.log(status);
  //如果已登录，跳转到首页
  if (status === 'authenticated') {
    //window.location.href = '/'
    redirect('/')
  }
  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleLogin = async () => {
    const res = await signIn('credentials', { redirect: false, username, password })
    console.log(res)
    if (res && res.ok) {
      console.log(res)
    } else {
      alert('登录失败')
    }
    return
  }
  return (
    <main className="bg-white dark:bg-slate-900">
      <div className="relative md:flex">
        {/* Content */}
        <div className="md:w-1/2">
          <div className="flex h-full min-h-[100dvh] flex-col after:flex-1">
            <AuthHeader />

            <div className="mx-auto w-full max-w-sm px-4 py-8">
              <h1 className="mb-6 text-3xl font-bold text-slate-800 dark:text-slate-100">
                Welcome back! ✨
              </h1>
              {/* Form */}
              <form>
                <div className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium" htmlFor="username">
                      用户名
                    </label>
                    <input
                      id="username"
                      className="form-input w-full"
                      type="username"
                      value={username}
                      onChange={handleUsernameChange}
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium" htmlFor="password">
                      密码
                    </label>
                    <input
                      id="password"
                      className="form-input w-full"
                      type="password"
                      autoComplete="on"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <button
                    type="button"
                    className="btn ml-3 bg-indigo-500 text-white hover:bg-indigo-600"
                    onClick={() => {
                      handleLogin()
                    }}
                  >
                    Sign In
                  </button>
                </div>
              </form>
              {/* Footer */}
              <div className="mt-6 border-t border-slate-200 pt-5 dark:border-slate-700">
                {/* Warning */}
                <div className="mt-5">
                  <div className="rounded bg-amber-100 px-3 py-2 text-amber-600 dark:bg-amber-400/30 dark:text-amber-400">
                    <svg className="mr-2 inline h-3 w-3 shrink-0 fill-current" viewBox="0 0 12 12">
                      <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                    </svg>
                    <span className="text-sm">
                      To support you during the pandemic super pro features are free until March
                      31st.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AuthImage />
      </div>
    </main>
  )
}

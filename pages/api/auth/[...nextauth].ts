import NextAuth from 'next-auth'
import { type NextRequest, NextResponse } from 'next/server'
import type { NextApiRequest, NextApiResponse } from 'next'
//import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from 'next-auth/providers/credentials'
import users from '@/data/users/index.json' assert { type: 'json' }

interface User {
  id: string // 假设这是必须的
  name: string
  email: string
  username: string
  // 注意：通常不应该在用户对象中包含密码
}
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  /*if(req.query.nextauth.includes("callback") && req.method === "POST") {
    console.log(
      "Handling callback request from my Identity Provider",
      req.body
    )
  }*/
  const providers = [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(
        credentials: Record<'username' | 'password', string> | undefined,
        req
      ): Promise<User | null> {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        /* const res = await fetch("/your/endpoint", {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: { "Content-Type": "application/json" }
      })
      const user = await res.json()*/
        //console.log(credentials)
        //const res ={ok:true}
        //const user = {"user":'sadfa'}
        //根据用户名查询用户并匹配密码,filter
        if (credentials) {
          const user = users.filter((user) => user.username == credentials.username)
          //console.log(user)
          if (user.length > 0) {
            if (user[0].password == credentials.password) {
              return user[0]
            }
          }
        }
        // Return null if user data could not be retrieved
        return null
      },
    }),
  ]

  return await NextAuth(req, res, {
    providers,
    pages: {
      signIn: '/admin/signin', // 指向你的自定义登录页面路径
    },
    callbacks: {
      session({ session, token }) {
        // Return a cookie value as part of the session
        // This is read when `req.query.nextauth.includes("session") && req.method === "GET"`
        //session.someCookie = someCookie
        console.log(token)
        console.log('session')
        return session
      },
    },
  })
}
export default handler

// eslint-disable-next-line no-unused-vars
import NextAuth from 'next-auth/next'

declare module 'next-auth' {
  // eslint-disable-next-line no-unused-vars
  interface User {
    id: string
    name: string
    email: string
    username: string
    avatar_url: string
  }
}

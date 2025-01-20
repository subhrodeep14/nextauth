import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      
      credentials: {
        username: { label: "Username", type: "text", placeholder: "subhrodeep" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const  password  = credentials?.password;
        const  username  = credentials?.username;

        const user = { id: "1", name: "subhrodeep", email: "subhrodeep@gmail.com" }
  
        if (user) {
          return user
        } else {
          return null;
        }
      }
    }),
    GoogleProvider({
      clientId: "hiuh",
      clientSecret: " jb "
    })
  ]

})

export { handler as GET, handler as POST }
import NextAuth from "next-auth/next";
import CredentialProviders from "next-auth/providers/credentials";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialProviders({
      name: 'Credentials',
      async authorize(credentials, req) {
        return credentials
      }
    })
  ],
});

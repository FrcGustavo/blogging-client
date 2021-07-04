import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { UsersService } from 'root/services';

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'credentials',
      async authorize({ username, password }: { username: string, password: string }) {
        const { token, user: loggedUser } = await UsersService.login({
          email: username,
          password,
        });
        const { firstName: name, cover: image, email } = loggedUser;
        const user = { name, email, image, token };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt: async (token, user) => {
      if (user) {
        token.accessToken = user.token;
      }
      return token;
    },
    session: async (session, token) => {
      session.accessToken = token.accessToken;
      return session;
    }
  },
  pages: {
    signIn: '/ghost/signin',
    error: '/ghost/signin'
  }
});

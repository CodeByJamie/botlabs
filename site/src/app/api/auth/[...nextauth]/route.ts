import NextAuth from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

export const authOptions = {
	providers: [
		DiscordProvider({
			clientId: process.env.CLIENT_ID as string,
			clientSecret: process.env.CLIENT_SECRET as string,
		}),
	],

	callbacks: {
		async signIn({ user, account, profile, email, credentials }: any) {
			return true;
		},
		async redirect({ url, baseUrl }: any) {
			return baseUrl;
		},
		async session({ session, token, user }: any) {
			return session;
		},
		async jwt({ token, user, account, profile, isNewUser }: any) {
			return token;
		},
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST  }

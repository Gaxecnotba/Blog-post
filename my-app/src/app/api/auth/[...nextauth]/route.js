import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/db";
import bcrypt from "bcrypt";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "sebas123" },
        password: { label: "Password", type: "password", placeholder: "*****" },
      },
      async authorize(credentials, req) {
        const userFound = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (!userFound) throw new Error("User not found");
        const matchPassword = await bcrypt.compare(
          credentials.password,
          userFound.password
        );
        if (!matchPassword) throw new Error("Wrong password");
        if (userFound.email === "sebaselpr@gmail.com") {
          await prisma.user.update({
            where: {
              email: userFound.email,
            },
            data: {
              isAdmin: true,
            },
          });
        }
        return userFound;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
});

export { handler as GET, handler as POST };

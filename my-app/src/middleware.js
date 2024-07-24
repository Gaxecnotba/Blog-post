export { default } from "next-auth/middleware";
export const config = {
  matcher: ["/Home", "/EditPost/[id]", "/CreatePost"],
};

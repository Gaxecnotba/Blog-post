export { default } from "next-auth/middleware";
export const config = {
  matcher: ["/EditPost/[id]/edit", "/CreatePost", "/View/[id]"],
};

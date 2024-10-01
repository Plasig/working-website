import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProfilePage = createRouteMatcher(["/profile(.*)"]);

export default clerkMiddleware((auth, req) => {
  if (isProfilePage(req)) {
    return;
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
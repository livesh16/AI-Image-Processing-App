import { clerkMiddleware } from '@clerk/nextjs/server';

// Define routes to exclude from protection
const publicRoutes = ['/sign-in', '/sign-up'];

export default clerkMiddleware(async (auth, req) => {
  const url = req.nextUrl.pathname;

  // Skip protection for public routes
  if (publicRoutes.some((route) => url.startsWith(route))) {
    return;
  }

  // Protect all other routes
  await auth.protect();
});

export const config = {
  matcher: [
    // Match all routes except static files and Next.js internals
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};

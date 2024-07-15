import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import type { NextFetchEvent, NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { Config } from './utils';
import { Env } from './libs/environment';
console.log("executees");
const intlMiddleware = createMiddleware({
  locales: Config.locales,
  localePrefix: Config.localePrefix,
  defaultLocale: Config.defaultLocale,
});

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/admin(.*)',
  '/:locale/dashboard(.*)',
  '/:locale/admin(.*)',
]);

export default function middleware(
  request: NextRequest,
  event: NextFetchEvent,
) {
  // Run Clerk middleware only when it's necessary
  if (Env.MAINTENANCE_MODE === 'true') {
    console.log(Env.MAINTENANCE_MODE)
    request.nextUrl.pathname = "/maintenance";
    return intlMiddleware(request);
  }
  if (
    request.nextUrl.pathname.includes('/sign-in') ||
    request.nextUrl.pathname.includes('/sign-up') ||
    isProtectedRoute(request)
  ) {
    return clerkMiddleware((auth, req) => {
      if (isProtectedRoute(req)) {
        const locale =
          req.nextUrl.pathname.match(/(\/.*)\/dashboard/)?.at(1) ?? '';

        const signInUrl = new URL(`${locale}/sign-in`, req.url);

        auth().protect({
          // `unauthenticatedUrl` is needed to avoid error: "Unable to find `next-intl` locale because the middleware didn't run on this request"
          unauthenticatedUrl: signInUrl.toString(),
        });
      }

      return intlMiddleware(req);
    })(request, event);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

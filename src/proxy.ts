import { updateSession } from '@/lib/supabase/middleware';
import { type NextRequest, NextResponse } from 'next/server';

export default async function middleware(request: NextRequest) {
  const response = await updateSession(request);

  // Protect /dashboard and any future authenticated routes
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    const supabaseCookie = request.cookies.get(
      `sb-${process.env.NEXT_PUBLIC_SUPABASE_URL?.split('//')[1]?.split('.')[0]}-auth-token`
    );
    if (!supabaseCookie) {
      const url = request.nextUrl.clone();
      url.pathname = '/auth/signin';
      return NextResponse.redirect(url);
    }
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
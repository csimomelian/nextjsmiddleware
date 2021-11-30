import { NextResponse } from 'next/server';

const PUBLIC_FILE = /\.([a-zA-Z0-9]+$)/;

export function middleware(request) {
  const shouldHandleLocale =
    !PUBLIC_FILE.test(request.nextUrl.pathname) &&
    !request.nextUrl.pathname.includes('/api/') &&
    request.nextUrl.locale === 'default';

  return shouldHandleLocale
    ? NextResponse.redirect(`/es${request.nextUrl.pathname}`)
    : undefined;
}

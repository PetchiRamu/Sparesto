import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  // PRODUCT DETAIL PAGE CHECK (e.g., /product/123)
  // Indha regex '/product/' apparam ID irukkannu check pannum
  const isProductDetailPage = pathname.startsWith('/product/') && pathname !== '/product';

  // Detail page-ku poraanga, aanaal token illana -> Login-ku anuppu
  if (isProductDetailPage && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Already login panni irundha thirumba login page-ku poga vidatha
  if (pathname === '/login' && token) {
    return NextResponse.redirect(new URL('/product', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/product/:path*', '/login'],
};
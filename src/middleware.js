import { NextResponse } from "next/server";

export function middleware(req) {
  const allCookies = req.cookies.getAll();

  return NextResponse.redirect(new URL("/", req.url));
}

export const config = {
  matcher: "/ad",
};

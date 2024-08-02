import { NextRequest, NextResponse } from "next/server";
import { NextMiddleware } from "next/server";
import { PATHROUTES } from "./helpers/PATHROUTES";

export const middleware: NextMiddleware = async (request) => {
  // return NextResponse.next();

  const { pathname } = request.nextUrl;

  const isAuthenticated = checkUserAuthentication(request);
  if (pathname.startsWith(PATHROUTES.DASHBOARD || PATHROUTES.CART) && !isAuthenticated) {
    const url = new URL(PATHROUTES.LOGIN, request.url);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
};

function checkUserAuthentication(request: NextRequest) {
  const authToken = request.cookies.get("user");
  return !!authToken;
}

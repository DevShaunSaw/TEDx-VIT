import { withAuth } from "next-auth/middleware";

export default function middleware(req, event) {
  return withAuth(req, event);
}

export const config = {
  matcher: ["/seat-selection", "/ticket"],
};
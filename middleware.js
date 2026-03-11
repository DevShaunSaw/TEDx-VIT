import { withAuth } from "next-auth/middleware";

export default withAuth;

export const config = {
  matcher: [
    "/seat-selection",
    "/get-ticket"
  ],
};
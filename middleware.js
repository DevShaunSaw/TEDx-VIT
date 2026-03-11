export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/seat-selection",
    "/get-ticket"
  ],
};
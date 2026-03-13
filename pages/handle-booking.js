"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function HandleBooking() {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    const checkExistingBooking = async () => {
      if (status !== "authenticated") return

      try {
        const res = await fetch("/api/booking/user-booking")

        if (res.ok) {
          router.replace("/ticket")
        } else {
          router.replace("/seat-selection")
        }
      } catch (err) {
        console.error("Error checking user booking:", err)
        router.replace("/seat-selection")
      }
    };

    checkExistingBooking();
  }, [status, router]);

  return null
}
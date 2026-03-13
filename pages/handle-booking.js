"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function HandleBooking() {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "loading") return;

    const run = async () => {
      if (status === "unauthenticated") {
        router.replace("/auth/login?callbackUrl=/handle-booking");
        return;
      }

      try {
        const res = await fetch("/api/booking/user-booking");

        if (res.ok) {
          router.replace("/ticket");
        } else {
          router.replace("/seat-selection");
        }
      } catch (err) {
        console.error("Error checking booking:", err);
        router.replace("/seat-selection");
      }
    };

    run();
  }, [status]);

  return (
    <div style={{ textAlign: "center", marginTop: "40vh", color: "white" }}>
      Checking booking...
    </div>
  );
}
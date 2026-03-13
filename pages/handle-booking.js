"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function HandleBooking() {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "loading") return;
    if (status === "unauthenticated") {
      router.replace("/auth/login?callbackUrl=/handle-booking");
      return;
    }
    if (status === "authenticated") {
      fetch("/api/booking/user-booking", { cache: "no-store" })
        .then((res) => {
          if (res.ok) {
            router.replace("/ticket");
          } else {
            router.replace("/seat-selection");
          }
        })
        .catch(() => {
          router.replace("/seat-selection");
        });
    }
  }, [status, router]);
  return (
    <div style={{ textAlign: "center", marginTop: "40vh", color: "white" }}>
      Checking booking...
    </div>
  );
}
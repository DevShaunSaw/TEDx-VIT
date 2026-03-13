"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Navbar from '../components/widgets/navbar/Navbar';

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
    <>
      <Navbar />
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B0B0B",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "50px",
            border: "5px solid rgba(255,255,255,0.2)",
            borderTop: "5px solid #E62B1E",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        />

        <style jsx>{`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    </>
  );
}
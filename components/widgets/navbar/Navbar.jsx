"use client"

import Image from 'next/image'
import styles from './Navbar.module.css'
import Link from 'next/link'
import { useSession, signOut } from "next-auth/react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const C = {
  bg: "#040202",
  bgSection: "#070101",
  red: "#C8102E",
  redHot: "#FF2A2A",
  redDeep: "#6B0010",
  text: "rgba(235,195,195,0.95)", // boosted — warm off-white with red tint
  textMuted: "rgba(210,145,145,0.78)", // was 0.45 — much more visible now
  textDim: "rgba(195,120,120,0.62)", // was 0.28 — readable body copy
  textGhost: "rgba(175,100,100,0.48)", // was 0.18 — labels & metadata
  border: "rgba(180,30,30,0.18)",
  borderMid: "rgba(180,30,30,0.28)",
};

const Navbar = () => {
  const { data: session, status } = useSession()

  function ProfileAvatar({ session }) {
    const initial = session?.user?.name?.[0]?.toUpperCase() ?? "?";
    return session?.user?.image ? (
      <img
        src={session.user.image}
        alt={session.user.name ?? "Profile"}
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: `1px solid rgba(200,16,46,0.55)`,
          objectFit: "cover",
          display: "block",
        }}
      />
    ) : (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: `1px solid rgba(200,16,46,0.55)`,
          background: "rgba(200,16,46,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 13,
          fontWeight: 700,
          color: "#C8102E",
          fontFamily: "sans-serif",
          letterSpacing: 0,
        }}
      >
        {initial}
      </div>
    );
  }

  return (
    <div className={`${styles.nav}`}>
      <Link href='/' rel='noreferrer'>
        <div className={styles.logo}>
          <Image src='/logo.png' height={45} width={182} alt='logo' />
        </div>
      </Link>
      <ul className={styles.navright}>
        <Link href='/'>
          <div className={styles.item}>
            <li className={styles.navitem}>Home</li>
          </div>
        </Link>
        <Link href='/AboutTEDxVIT' >
          <div className={styles.item}>
            <li className={styles.navitem}>About</li>
          </div>
        </Link>
        <Link href='/PreviousEvents' >
          <div className={styles.item}>
            <li className={styles.navitem}>Previous Events</li>
          </div>
        </Link>
        <Link href='/#contacts' rel='noreferrer'>
          <div className={styles.item}>
            <li className={styles.navitem}>Contact Us</li>
          </div>
        </Link>
        <div className="flex items-center gap-5">
          {status === "authenticated" ? (
            // ── Logged in: avatar + name + logout ──
            <div className="flex items-center gap-3">
              <ProfileAvatar session={session} />
              <span
                className="hidden md:block text-[11px] tracking-[0.1em]"
                style={{
                  fontFamily: "sans-serif",
                  color: C.textMuted,
                  maxWidth: 120,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {session?.user?.name?.split(" ")[0]}
              </span>
              <motion.button
                onClick={() => signOut({ callbackUrl: "/auth/login" })}
                className="text-[11px] tracking-[0.2em] uppercase px-5 py-2 border"
                style={{
                  fontFamily: "sans-serif",
                  borderColor: C.redDeep,
                  color: C.textDim,
                }}
                whileHover={{ borderColor: C.red, color: C.red }}
                transition={{ duration: 0.2 }}
              >
                Logout
              </motion.button>
            </div>
          ) : (
            // ── Not logged in: sign in button ──
            <Link href="/auth/login" style={{ textDecoration: "none" }}>
              <motion.button
                className="text-[11px] tracking-[0.2em] uppercase px-5 py-2 border"
                style={{
                  fontFamily: "sans-serif",
                  borderColor: C.redDeep,
                  color: C.textDim,
                  background: "transparent",
                  cursor: "pointer",
                }}
                whileHover={{ borderColor: C.red, color: C.red }}
                transition={{ duration: 0.2 }}
              >
                Sign In
              </motion.button>
            </Link>
          )}
          </div>
      </ul>
    </div>
  )
}

export default Navbar
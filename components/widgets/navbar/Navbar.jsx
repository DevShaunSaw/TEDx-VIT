"use client"

import Image from 'next/image'
import styles from './Navbar.module.css'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { useSession, signOut } from "next-auth/react"
import { motion, AnimatePresence } from "framer-motion";

const C = {
  bg: "#040202",
  bgSection: "#070101",
  red: "#C8102E",
  redHot: "#FF2A2A",
  redDeep: "#6B0010",
  text: "rgba(235,195,195,0.95)",
  textMuted: "rgba(210,145,145,0.78)",
  textDim: "rgba(195,120,120,0.62)",
  textGhost: "rgba(175,100,100,0.48)",
  border: "rgba(180,30,30,0.18)",
  borderMid: "rgba(180,30,30,0.28)",
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/AboutTEDxVIT", label: "About" },
  { href: "/PreviousEvents", label: "Previous Events" },
  { href: "/#contacts", label: "Contact Us" },
];

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

const Navbar = () => {
  const { data: session, status } = useSession()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isMobileMenuOpen])

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <>
      <div className={`${styles.nav}`}>
        {/* Logo */}
        <Link href='/' rel='noreferrer'>
          <div className={styles.logo}>
            <Image src='/logo.png' height={45} width={182} alt='logo' />
          </div>
        </Link>

        {/* Desktop nav links */}
        <ul className={styles.navright}>
          {NAV_LINKS.map(({ href, label }) => (
            <Link href={href} key={label}>
              <div className={styles.item}>
                <li className={styles.navitem}>{label}</li>
              </div>
            </Link>
          ))}

          {/* Auth button — desktop */}
          <div className={styles.authDesktop}>
            {status === "authenticated" ? (
              <div ref={dropdownRef} style={{ position: "relative" }}>
                <motion.button
                  onClick={toggleDropdown}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "6px 12px",
                    borderRadius: "9999px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: `1px solid ${isDropdownOpen ? C.red : "rgba(255,255,255,0.1)"}`,
                    cursor: "pointer",
                    outline: "none",
                    transition: "all 0.2s",
                  }}
                  whileHover={{ background: "rgba(255, 255, 255, 0.08)", borderColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ProfileAvatar session={session} />
                  <span
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: 500,
                      letterSpacing: "0.02em",
                      fontFamily: "sans-serif",
                      color: C.text,
                      maxWidth: 100,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {session?.user?.name?.split(" ")[0]}
                  </span>
                  <motion.svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                    style={{ color: C.textGhost }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </motion.svg>
                </motion.button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      style={{
                        position: "absolute",
                        top: "calc(100% + 12px)",
                        right: 0,
                        width: "200px",
                        background: "#0F0F0F",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "12px",
                        padding: "8px",
                        boxShadow: "0 10px 40px rgba(0,0,0,0.5), 0 0 1px rgba(255,255,255,0.1)",
                        zIndex: 10000,
                        backdropFilter: "blur(20px)",
                      }}
                    >
                      <div style={{ padding: "8px 12px", marginBottom: "4px" }}>
                        <p style={{ margin: 0, fontSize: "11px", color: C.textGhost, textTransform: "uppercase", letterSpacing: "0.05em" }}>Account</p>
                        <p style={{ margin: 0, fontSize: "14px", color: C.text, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis" }}>{session?.user?.name}</p>
                      </div>

                      <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", margin: "4px 0" }} />

                      <Link href="/ticket" style={{ textDecoration: "none" }}>
                        <motion.div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "10px 12px",
                            borderRadius: "8px",
                            cursor: "pointer",
                          }}
                          whileHover={{ background: "rgba(255,255,255,0.05)" }}
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.red} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                            <path d="M13 5v2" /><path d="M13 17v2" /><path d="M13 11v2" />
                          </svg>
                          <span style={{ fontSize: "14px", color: C.textMuted }}>Show Ticket</span>
                        </motion.div>
                      </Link>

                      <motion.div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "10px 12px",
                          borderRadius: "8px",
                          cursor: "pointer",
                        }}
                        whileHover={{ background: "rgba(200, 16, 46, 0.1)" }}
                        onClick={() => signOut({ callbackUrl: "/auth/login" })}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8102E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                          <polyline points="16 17 21 12 16 7" />
                          <line x1="21" y1="12" x2="9" y2="12" />
                        </svg>
                        <span style={{ fontSize: "14px", color: "#C8102E", fontWeight: 500 }}>Logout</span>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link href="/auth/signup" style={{ textDecoration: "none" }}>
                <motion.button
                  style={{
                    backgroundColor: "var(--dark)",
                    borderRadius: "40px",
                    borderWidth: "2px",
                    borderStyle: "solid",
                    borderColor: "var(--red)",
                    color: "#fff",
                    fontFamily: "'Product Sans', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                    padding: "0.5rem 1.25rem",
                    cursor: "pointer",
                    userSelect: "none",
                    transition: "all 0.2s",
                  }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)",
                  }}
                  whileTap={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  Sign Up
                </motion.button>
              </Link>
            )}
          </div>
        </ul>

        {/* Hamburger button — mobile only */}
        <button
          className={styles.hamburger}
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>
      </div>

      {/* ── Mobile drawer overlay ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMobileMenu}
            />

            {/* Drawer panel */}
            <motion.div
              className={styles.drawer}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Close button */}
              <button
                className={styles.closeBtn}
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Logo in drawer */}
              <div className={styles.drawerLogo}>
                <Image src='/logo.png' height={38} width={155} alt='logo' />
              </div>

              {/* Divider */}
              <div className={styles.drawerDivider} />

              {/* Nav links in drawer */}
              <nav className={styles.drawerNav}>
                {NAV_LINKS.map(({ href, label }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.25 }}
                  >
                    <Link
                      href={href}
                      className={styles.drawerLink}
                      onClick={closeMobileMenu}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Divider */}
              <div className={styles.drawerDivider} />

              {/* Auth section in drawer */}
              <div className={styles.drawerAuth}>
                {status === "authenticated" ? (
                  <>
                    <div className={styles.drawerProfile}>
                      <ProfileAvatar session={session} />
                      <div>
                        <p className={styles.drawerProfileName}>{session?.user?.name}</p>
                        <p className={styles.drawerProfileEmail}>{session?.user?.email}</p>
                      </div>
                    </div>

                    <Link href="/ticket" className={styles.drawerAuthBtn} onClick={closeMobileMenu}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.red} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                        <path d="M13 5v2" /><path d="M13 17v2" /><path d="M13 11v2" />
                      </svg>
                      Show Ticket
                    </Link>

                    <button
                      className={`${styles.drawerAuthBtn} ${styles.drawerLogout}`}
                      onClick={() => { closeMobileMenu(); signOut({ callbackUrl: "/auth/login" }) }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8102E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1="21" y1="12" x2="9" y2="12" />
                      </svg>
                      Logout
                    </button>
                  </>
                ) : (
                  <Link href="/auth/signup" className={styles.drawerSignupBtn} onClick={closeMobileMenu}>
                    Sign Up
                  </Link>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
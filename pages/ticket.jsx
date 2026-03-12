import { useState, useEffect, useCallback } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Navbar from '../components/widgets/navbar/Navbar'
import MiniFooter from '../components/widgets/minifooter/MiniFooter'
import styles from '../styles/ticket.module.css'
import QRCode from 'react-qr-code'
import Head from 'next/head'

function useQRSize() {
  const [size, setSize] = useState(180)
  useEffect(() => {
    const update = () => setSize(window.innerWidth <= 480 ? 140 : 180)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])
  return size
}

export default function GetTicket() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [booking, setBooking] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const qrSize = useQRSize()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/login')
      return
    }

    if (status === 'authenticated') {
      fetchBooking()
    }
  }, [status, router])

  const fetchBooking = async () => {
    try {
      const response = await fetch('/api/booking/user-booking')
      if (response.status === 404) {
        router.push('/seat-selection')
        return
      }
      if (!response.ok) {
        throw new Error('Failed to fetch ticket')
      }
      const data = await response.json()
      setBooking(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (status === 'loading' || loading) {
    return (
      <div className={styles.loading}>
        <Navbar />
        <p>Loading your ticket...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.error}>
        <Navbar />
        <p>Error: {error}</p>
      </div>
    )
  }

  if (!booking) return null

  // Create QR code data
  const qrData = JSON.stringify({
    uid: booking.user_id,
    seat: booking.seat_no
  })

  return (
    <>
      <Head>
        <title>Your Ticket - TEDxVIT</title>
      </Head>
      <Navbar />
      <div className={styles.ticketContainer}>
        <div className={styles.ticket}>
          <div className={styles.ticketLeft}>
            <h1 className={styles.eventTitle}>TEDxVIT 2026</h1>
            <div className={styles.detailsGrid}>
              <div className={styles.detailItem}>
                <span className={styles.label}>Name</span>
                <span className={styles.value}>{booking.full_name}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Seat Number</span>
                <span className={styles.value}>{booking.seat_no}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Email</span>
                <span className={styles.value}>{booking.email}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Phone</span>
                <span className={styles.value}>{booking.phone}</span>
              </div>
            </div>
          </div>
          <div className={styles.ticketRight}>
            <div className={styles.qrContainer}>
              <QRCode
                value={qrData}
                size={qrSize}
                bgColor="#FFFFFF"
                fgColor="#000000"
                level="H"
              />
            </div>
            <p className={styles.qrLabel}>Scan at Entry</p>
          </div>
        </div>
      </div>
      <MiniFooter />
    </>
  )
}
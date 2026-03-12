"use client"
import { useRouter } from 'next/router'
import { useSession } from "next-auth/react"
import { useEffect } from 'react'

export default function HandleBooking() {
    const router = useRouter()
    const { data: session, status } = useSession()

    useEffect(() => {
        const checkExistingBooking = async () => {
          if (status === "authenticated") {
            try {
              const res = await fetch('/api/booking/user-booking');
              if (res.ok)
                router.push('/ticket')
              else
                router.push('/seat-selection')
            } catch (err) {
              console.error('Error checking user booking:', err);
            }
          }
          else
            router.push('/auth/login')
        };
    
        checkExistingBooking()
      }, []);
}
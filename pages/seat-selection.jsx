"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import toast from 'react-hot-toast';
import styles from "../styles/seat.module.css";
import Navbar from '../components/widgets/navbar/Navbar';
import MiniFooter from '../components/widgets/minifooter/MiniFooter';
import RegisterModal from "../components/RegisterModal";

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

export default function BookingPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [occupiedSeats, setOccupiedSeats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const openModal = () => {
    if (!selectedSeat)
      alert('Please select a seat first!')
    else
      setRegisterOpen(true);
  }

  const MOVIE_ID = 'TedxVIT-2026';
  const NUM_COLS = 17;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await fetch(`/api/booking`);
      const data = await res.json();
      if (res.ok) {
        setOccupiedSeats(data.map(b => b.seat_no));
      }
    } catch (err) {
      console.error('Failed to fetch bookings');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchBookings();
  }, [status]);
  
  const renderSeats = () => {
    const seats = [];
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    
    // Helper to render a row
    const renderRow = (rowLabel, cols) => {
      const row = [];
        row.push(<div key={`${rowLabel}-label`} className={styles['row-label']}>{rowLabel}</div>);
      for (let c = 1; c <= cols; c++) {
        const seatId = `${rowLabel}${c}`;
        const isOccupied = occupiedSeats.includes(seatId);
        const isSelected = selectedSeat === seatId;
        row.push(
          <button
            key={seatId}
            className={`${styles.seat} ${isOccupied ? styles.occupied : ''} ${isSelected ? styles.selected : ''}`}
            disabled={isOccupied}
            onClick={() => setSelectedSeat(seatId)}
          >
            {c}
          </button>
        );
      }
      return row;
    };

    // Block 1: A-I
    rows.forEach(r => seats.push(...renderRow(r, 17)));

    seats.push(<div key="spacer1-0" className={styles['empty-cell']}></div>);
    for (let i = 1; i <= 17; i++) seats.push(<div key={`spacer1-${i}`} className={styles['empty-cell']}></div>);

    return seats;
  };

  return (
    <>
      <Navbar />
      <div className={styles['booking-container']}>

      <div className={styles['seat-selection']}>
        <div className={styles['screen-container']}>
          <div className={styles['screen-label']}>Stage This Way</div>
          <div className={styles['theatre-screen']}></div>
        </div>

        <div className={styles['seats-container']}>
          <div className={styles['seat-map']}>
            {/* Column Headers */}
            <div className={styles['row-label']}></div>
            {Array.from({ length: 17 }, (_, i) => (
              <div key={`col-${i + 1}`} className={styles['row-label']}>{i + 1}</div>
            ))}
            {renderSeats()}
          </div>
        </div>

        <div className={styles['seat-info']}>
          <div className={styles['seat-info-item']}>
            <div className={`${styles['seat-sample']} ${styles['available-sample']}`}></div>
            <span>Available</span>
          </div>
          <div className={styles['seat-info-item']}>
            <div className={`${styles['seat-sample']} ${styles['selected-sample']}`}></div>
            <span>Selected</span>
          </div>
          <div className={styles['seat-info-item']}>
            <div className={`${styles['seat-sample']} ${styles['occupied-sample']}`}></div>
            <span>Occupied</span>
          </div>
        </div>

        <div className={styles['booking-summary']}>
          <h3 className={styles['summary-title']}>Booking Summary</h3>
          <div className={styles['selected-seats']}>
            {selectedSeat ? `Selected: ${selectedSeat}` : 'No seats selected'}
          </div>
          <button className={styles['confirm-btn']} onClick={openModal}>
            Confirm Booking
          </button>
        </div>
      </div>
      </div>
      <MiniFooter />
      <RegisterModal
        open={registerOpen}
        seatValue = {selectedSeat}
        onClose={() => setRegisterOpen(false)}
      />
    </>
  );
}

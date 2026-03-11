"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";
import toast from 'react-hot-toast';
import styles from "../styles/seat.module.css";
import Navbar from '../components/widgets/navbar/Navbar';
import MiniFooter from '../components/widgets/minifooter/MiniFooter';

export default function BookingPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [occupiedSeats, setOccupiedSeats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const MOVIE_ID = 'TedxVIT-2026';
  const NUM_COLS = 17;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await fetch(`/api/booking?movie=${MOVIE_ID}`);
      const data = await res.json();
      if (res.ok) {
        setOccupiedSeats(data.map(b => b.seat_no));
      }
    } catch (err) {
      console.error('Failed to fetch bookings');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBooking = async () => {
    if (!selectedSeat) {
      toast.error('Please select a seat');
      return;
    }
    
    if (status === "unauthenticated") {
      toast.error('Please login to book a ticket');
      router.push('/auth/login');
      return;
    }

    if (status === "loading") {
      return;
    }

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          movie: MOVIE_ID,
          seat_no: selectedSeat,
          full_name: session.user.name,
          email: session.user.email,
          phone: session.user.phone || 'N/A'
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Booking failed');
      
      toast.success('🎉 Booking saved!');
      fetchBookings();
      setSelectedSeat(null);
    } catch (err) {
      toast.error(err.message);
    }
  };

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

    // Spacer
    seats.push(<div key="spacer1-0" className={styles['empty-cell']}></div>);
    for (let i = 1; i <= 17; i++) seats.push(<div key={`spacer1-${i}`} className={styles['empty-cell']}></div>);

    // Block 2: J-O (broken)
    const middleRows = ['J', 'K', 'L', 'M', 'N', 'O'];
    middleRows.forEach(r => {
      seats.push(<div key={`${r}-label`} className={styles['row-label']}>{r}</div>);
      for (let c = 1; c <= 5; c++) {
        const seatId = `${r}${c}`;
        const isOccupied = occupiedSeats.includes(seatId);
        const isSelected = selectedSeat === seatId;
        seats.push(
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
      for (let i = 0; i < 7; i++) seats.push(<div key={`${r}-empty-${i}`} className={styles['empty-cell']}></div>);
      for (let c = 13; c <= 17; c++) {
        const seatId = `${r}${c}`;
        const isOccupied = occupiedSeats.includes(seatId);
        const isSelected = selectedSeat === seatId;
        seats.push(
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
    });

    // Spacer
    seats.push(<div key="spacer2-0" className={styles['empty-cell']}></div>);
    for (let i = 1; i <= 17; i++) seats.push(<div key={`spacer2-${i}`} className={styles['empty-cell']}></div>);

    // Block 3: P-R
    ['P', 'Q', 'R'].forEach(r => seats.push(...renderRow(r, 17)));

    return seats;
  };

  return (
    <>
      <Navbar />
      <div className={styles['booking-container']}>

      <div className={styles['movie-details']}>
        <img src="/assets/ford_poster.jpg" alt="Ford v Ferrari" className={styles['movie-poster']} />
        <h2 className={styles['movie-title']}>Ford v Ferrari</h2>
        <div className={styles['movie-info']}>
          <div className={styles['info-item']}>
            <i className="far fa-calendar-alt"></i>
            <span>2019</span>
          </div>
          <div className={styles['info-item']}>
            <i className="far fa-clock"></i>
            <span>2h 32m</span>
          </div>
        </div>
        <p className={styles['movie-description']}>
          American car designer Carroll Shelby and driver Ken Miles battle corporate interference 
          and the laws of physics to build a revolutionary race car for Ford in order to defeat Ferrari at the 24 Hours of Le Mans in 1966.
        </p>
      </div>

      <div className={styles['seat-selection']}>
        <div className={styles['screen-container']}>
          <div className={styles['screen-label']}>Screen This Way</div>
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
          <button className={styles['confirm-btn']} onClick={handleBooking}>
            Confirm Booking
          </button>
        </div>
      </div>


      </div>
      <MiniFooter />
    </>
  );
}

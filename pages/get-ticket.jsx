import Link from 'next/link'
import Navbar from '../components/widgets/navbar/Navbar'
import MiniFooter from '../components/widgets/minifooter/MiniFooter'

export default function GetTicket () {
  return (
    <>
      <Navbar />
        <iframe src="https://konfhub.com/widget/tedx-vit-2026-touching-the-soul?desc=false&secondaryBg=ff0000&ticketBg=ff0000&borderCl=ff0000&bg=000000&fontColor=ffffff&ticketCl=ffffff&btnColor=000000&fontFamily=Figtree&borderRadius=24&widget_type=quick&screen=2&tickets=83152&ticketId=83152%7C1" id="konfhub-widget" title="Register for TEDx VIT 2026 - Touching The Soul" width="100%" height="750" style={{ marginTop: '96px'}}></iframe>
        <div className="ticket-text" style={{cursor: 'default'}}>
          <h2 style={{ textAlign: 'center', marginTop: '24px', fontSize: '24px', color: '#EEEEEE' }}>Do Not Navigate From or Refresh this Page Until The Completion of Booking Process</h2>
          <h2 style={{ textAlign: 'center', marginTop: '24px', fontSize: '24px', color: '#EEEEEE' }}>When The Confirmation Page with All Set Message Arrives. You Can <Link href="/ticket" style={{color: '#FF0000'}}>View Ticket</Link> on The Site.</h2>
        </div>
      <MiniFooter/>
    </>
  )
}
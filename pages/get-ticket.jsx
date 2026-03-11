import Link from 'next/link'
import Navbar from '../components/widgets/navbar/Navbar'
import Cards from '../components/speaker/Card'
import styles from '../styles/2024.module.css'
import Image from 'next/image'
import MiniFooter from '../components/widgets/minifooter/MiniFooter'
import Timeline from '../components/timeline/Timeline'

export default function GetTicket () {
  return (
    <>
      <Navbar />
        <iframe src="https://konfhub.com/widget/tedx-vit-2026-touching-the-soul?desc=false&secondaryBg=ff0000&ticketBg=ff0000&borderCl=ff0000&bg=000000&fontColor=ffffff&ticketCl=ffffff&btnColor=000000&fontFamily=Figtree&borderRadius=24&widget_type=quick&screen=2&tickets=83152&ticketId=83152%7C1" id="konfhub-widget" title="Register for TEDx VIT 2026 - Touching The Soul" width="100%" height="750" style={{ marginTop: '96px'}}></iframe>
        <iframe src="https://konfhub.com/widget/tedx-vit-2026-touching-the-soul?desc=false&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=1e1f24&ticketCl=1e1f24&btnColor=002E6E&fontFamily=Figtree&borderRadius=24&widget_type=standard&tickets=84208&ticketId=84208%7C1" id="konfhub-widget" title="Register for TEDx VIT 2026 - Touching The Soul" width="100%" height="520" style={{ marginTop: '96px'}}></iframe>
      <MiniFooter/>
    </>
  )
}
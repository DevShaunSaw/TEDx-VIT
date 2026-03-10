import '../styles/globals.css'
import Head from 'next/head'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function MyApp ({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-sine',
      once: true,
      offset: 30,
      duration: 350,
      delay: 200
    })
  }, [])
  return (
    <>
      <Head>
        <meta charset='utf-8' />
        <link rel='icon' href='/fav.png' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#ff0000' />
        <meta
          name='keywords'
          content="TEDx VIT, TED, TEDx, Ted Talk, Event, Mumbai, Event in mumbai, Talk in march, Talk in 2025, Conference in march, Conference in 2025, Conference in Mumbai, Talk in Mumbai, Ted Talk in mumbai, Vidyalankar, Vidyalankar Insitute of Technology, VIT, VIT Mumbai, Verve, Verve VIT"
        />
        <meta property='og:type' content='website' />
        <meta property='og:title' content="TEDx VIT 2025" />
        <meta
          property='og:description'
          content="Official website for TEDx VIT 2025"
        />
        <meta name='language' content='en' />
        <meta name='url' content='https://www.tedxvit.com/' />
        <meta name='category' content='TEDx Talk' />
        <meta name='coverage' content='Worldwide' />
        <meta name='copyright' content='TEDx' />
        <meta property='og:url' content='https://devjams.dscvit.com' />
        <meta property='og:site_name' content="TEDx VIT" />
        <meta property='og:image' content='/favicon.png' />
        <meta name='og:email' content='tedxvittalks@gmail.com' />
        <meta name='og:region' content='Mumbai' />
        <meta name='og:country-name' content='India' />
        <meta name='rating' content='General' />
        <title>TEDx VIT</title>

        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

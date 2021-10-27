// pm2 start npm --name "stickits main" -- start

import Head from 'next/head'
import { Container } from 'react-bootstrap'
import GlobalHeader from '../components/GlobalHeader/GlobalHeader'
import Header from '../components/MastHead/MastHead'
import NoteBoard from '../components/Noteboard/Noteboard'
import Footer from '../components/Footer/Footer'

export default function App() {
  return (    
    <Container className="app">

    <Head>
      <title>Is Stickits</title>

      <GlobalHeader />

    </Head>
    
      <MastHead />

      <NoteBoard />

      <Footer />

    </Container>
  )
}

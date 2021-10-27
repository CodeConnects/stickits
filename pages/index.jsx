// pm2 start npm --name "stickits main" -- start

import Head from 'next/head'
import { Container } from 'react-bootstrap'
import Header from '../components/Header/Header'
import NoteBoard from '../components/Noteboard/Noteboard'
import Footer from '../components/Footer/Footer'

export default function App() {
  return (    
    <Container className="app">

    <Head>
      <title>Is Stickits</title>
    </Head>
    
      <Header />

      <NoteBoard />

      <Footer />

    </Container>
  )
}

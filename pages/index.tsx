import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Trending from '../components/Trending'
import Destination from '../components/Destination'
import NewsLetter from '../components/NewsLetter'
import About from '../components/About'
import Footer from '../components/Footer'
import Explore from '../components/Explore'

const Home: NextPage = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <Navbar/>
          <Banner/>
          <Trending/>
          <Explore/>
          <Destination/>
          <About/>
          <NewsLetter/>
          <Footer/>
        </div>
      </main>
    </div>
  )
}

export default Home

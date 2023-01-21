import Head from 'next/head';

import { About, Portfolio, Contact, Hero } from '../components/index'

const Home = () => {
  return (
    <>
      <Head>
        <title>design web project</title>
      </Head>
      <div className="">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </div></>
  )

}

export default Home

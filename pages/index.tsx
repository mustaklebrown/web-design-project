import Head from 'next/head';
import { FaHome, FaUserGraduate } from 'react-icons/fa';
import { ImStatsBars2 } from 'react-icons/im'
import { MdContactMail } from 'react-icons/md'
import { About, Portfolio, Contact, Hero,Navbar } from '../components/index'

const Home = () => {
  return (
    <>
      <Head>
        <title>design web project</title>
      </Head>
      <div className="relative">
      <Navbar />
        <Hero />
        <About />
        <Portfolio />
        <Contact />
        <div className="fixed  flex gap-10 justify-between items-center bottom-10 translate-x-[-50%] left-[50%] bg-gradient p-4 max-w-md mx-auto z-30 rounded-md">
          <a
            href="#nav"
            className="text-base cursor-pointer font-semibold hover:scale-125 duration-200 transition-all"
          >
            <FaHome fontSize={25} />
          </a>
          <a
            href="#about"
            className="text-base cursor-pointer font-semibold hover:scale-125 duration-200 transition-all"
          >
            <FaUserGraduate fontSize={25} />
          </a>
          <a
            href="#portfolio"
            className="text-base cursor-pointer font-semibold hover:scale-125 duration-200 transition-all"
          >
            <ImStatsBars2 fontSize={25} />
          </a>
          <a
            href="#contact"
            className="text-base cursor-pointer font-semibold hover:scale-125 duration-200 transition-all"
          >
            <MdContactMail fontSize={25} />
          </a>
        </div>
      </div></>
  )

}

export default Home

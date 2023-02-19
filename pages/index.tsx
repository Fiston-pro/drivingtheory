import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import HomeCard from '../components/homeCard'

import { HiArrowNarrowRight } from 'react-icons/hi';
import { BsFillBookFill } from 'react-icons/bs';
import { GrPowerReset } from 'react-icons/gr';
import { FaGraduationCap } from 'react-icons/fa';

import kidimage from '../public/assets/homepagekid.jpeg'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Driving Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" px-10 min-h-screen">
        <Header/>
        <section className="flex flex-col md:flex-row ">
          <div className='md:w-1/2 md:pr-8 md:mt-32 mb-4 md:mb-0'>
            <div className='font-bold text-7xl md:w-3/4 lg:mb-12'>
              We make you ready to ace that driving test
            </div>
            <div className="text-base flex items-center px-4 py-3 rounded-lg text-secondary bg-primary hover:bg-secondary-light w-max	">
              <a href="#signup">Take a mock test</a>
              <HiArrowNarrowRight className="ml-2" />
            </div>
          </div>
          <div className='md:w-1/2'>
            <Image src={kidimage} alt="Icon" className="w-full h-auto"/>
          </div>
        </section>
        <section id="how-it-works" className='flex justify-center flex-col '>
          <div className='mx-auto'>AN EASY WAY TO STUDY BORING STUFF</div>
          <div className='mx-auto font-bold text-7xl my-3'>HOW IT WORKS</div>
          <div className='mx-auto'>

          <div className='flex justify-center flex-row my-8'>

            <HomeCard
              title="Read the Driver's Manual"
              icon={BsFillBookFill}
            />

            <HomeCard
              title="Take practice tests"
              icon={GrPowerReset}
            />


            <HomeCard
              title="Pass your Legal test"
              icon={FaGraduationCap}
            />

          </div>

          </div>
        </section>
      </main>
    </div>
  )
}

export default Home

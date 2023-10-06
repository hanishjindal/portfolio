import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-screen min-h-screen overflow-y-scroll relative'>
      <Navbar />
      <Image
        src="/images/background1.jpg"
        alt='background'
        className='absolute top-0 left-0 w-full h-full -z-10 object-cover'
        fill={true}
      />
    </div>
  )
}

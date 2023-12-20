import Hero from '@/components/Hero/Hero.index'
import Navbar from '@/components/Navbar/Navbar.index'
import Image from 'next/image'

export default function Home() {
  return (
        <div className="bg-black h-screen">
                <Navbar></Navbar>
                <Hero></Hero>
        </div>
  )
}

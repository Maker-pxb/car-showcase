import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CustomButton } from '.'

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between sm:px-16 px-6 py-4">
        <Link
          href={'/'}
          className="flex justify-center items-center cursor-pointer"
        >
          <Image
            src="/logo.svg"
            alt="Car Hub Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyle="text-primary-blue rounded-full bg-white min-w-[130px] cursor-pointer"
        />
      </nav>
    </header>
  )
}

export default Navbar

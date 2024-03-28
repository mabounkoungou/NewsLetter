import Link from 'next/link'
import Logo from './logo'
import React from 'react'

const Header = () => {
  return (
    <Header className='full sticky 
    top-0 left-0 z-[999] border-b 
    border-b[#000] px-10 flex 
    items-center h-[80px] 
    bg-white text-black'
    >
        <div>
            <Link href={"/"}>
                <Logo />
            </Link>
        </div>
    </Header>
  )
}

export default Header
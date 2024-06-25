import {  SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

import Link from 'next/link'
const NavBar = () => {
  const navigation = [
    {
        path: "/about",
        text: "About us",
        icon: "",
      },
      {
        path: "/cook",
        text: "Recipees",
        icon: "",
      },{
        path: "/fat",
        text: "Calculator",
        icon: "",
      },
  ];
  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
           {navigation.map((link)=>{
            return <li>
            <Link href={link.path} className='font-subtitle font-bold text-xl'>{link.text}</Link>
          </li>
          })}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost font-libre text-xl text-secondary">Nutrifit</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navigation.map((link)=>{
            return <li>
            <Link href={link.path} className='font-subtitle font-bold text-xl'>{link.text}</Link>
          </li>
          })}
        </ul>
      </div>
      <div className="navbar-end">
      <SignedOut>
            <SignInButton className="btn btn-primary"/>
          </SignedOut>
          <SignedIn>
            <UserButton className="w-12"/>
          </SignedIn>
      
      </div>
    </div>
  );
};

export default NavBar;

import type { JSX } from "react";
import logo from '../assets/logo.svg';



export default function Header(): JSX.Element {
  return (
    <>
      <header className="mb-32 pt-10 content">
        <nav className="flex justify-between">
          <div id="left-nav">
            <ul className="flex justify-between gap-4">
              <li><img src={logo} alt="short-url logo"/></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Resources</a></li>
            </ul>
          </div>
          <div id="right-nav">
            <ul className="flex justify-between gap-6">
              <li><a href="#">Login</a></li>
              <li><a href="#" className="bg-(--blue-400) rounded-3xl text-white px-4 py-2">Sign Up</a></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}
import type { JSX } from "react";
import logo from '../assets/logo.svg';



export default function Header(): JSX.Element {
  return (
    <>
      <header>
        <nav className="flex justify-between">
          <div id="left-nav">
            <ul className="flex justify-between">
              <img src={logo} alt="short-url logo"/>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Resources</a></li>
            </ul>
          </div>
          <div id="right-nav">
            <ul className="flex justify-between">
              <li><a href="#">Login</a></li>
              <li><a href="#">Sign Up</a></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}
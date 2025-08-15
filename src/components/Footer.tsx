import type { JSX } from "react";
import LogoShortly from '../assets/logo.svg?react'
import LogoFacebook from '../assets/icon-facebook.svg?react'
import LogoTwitter from '../assets/icon-twitter.svg?react'
import LogoPinterest from '../assets/icon-pinterest.svg?react'
import LogoInstagram from '../assets/icon-instagram.svg?react'


export default function Footer(): JSX.Element {
	return (
		<footer className="py-10 flex justify-between bg-(--gray-900) footer-links">
			<LogoShortly fill='currentColor' color="white"/>
			<div className="flex justify-between gap-16">
				<section>
					<h4 className="text-white">Features</h4>
					<ul>
						<li><a href="">Link Shortening</a></li>
						<li><a href="">Branded Links</a></li>
						<li><a href="">Analytics</a></li>
					</ul>
				</section>
				<section>
					<h4 className="text-white">Resources</h4>
					<ul>
						<li><a href="">Blog</a></li>
						<li><a href="">Developers</a></li>
						<li><a href="">Support</a></li>
					</ul>
				</section>
				<section>
					<h4 className="text-white">Company</h4>
					<ul>
						<li><a href="">About</a></li>
						<li><a href="">Our Team</a></li>
						<li><a href="">Careers</a></li>
						<li><a href="">Contact</a></li>
					</ul>
				</section>
				<section className="flex gap-4">
					<a href=""><LogoTwitter fill="currentColor" color="white"/></a>
					<a href=""><LogoFacebook fill="currentColor" color="white"/></a>
					<a href=""><LogoInstagram fill="currentColor" color="white" /></a>
					<a href=""><LogoPinterest fill="currentColor" color="white" /></a>
				</section>
			</div>
			
		</footer>
	)
}
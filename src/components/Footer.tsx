import type { JSX } from "react";
import logo from '../assets/logo.svg'
import logoFacebook from '../assets/icon-facebook.svg'
import logoTwitter from '../assets/icon-twitter.svg'
import logoPinterest from '../assets/icon-pinterest.svg'
import logoInstagram from '../assets/icon-instagram.svg'

export default function Footer(): JSX.Element {
	return (
		<footer>
			<img src={logo} alt="shortly logo" />
			<div className="flex">
				<section>
					<h4>Features</h4>
					<ul>
						<li><a href="">Link Shortening</a></li>
						<li><a href="">Branded Links</a></li>
						<li><a href="">Analytics</a></li>
					</ul>
				</section>
				<section>
					<h4>Resources</h4>
					<ul>
						<li><a href="">Blog</a></li>
						<li><a href="">Developers</a></li>
						<li><a href="">Support</a></li>
					</ul>
				</section>
				<section>
					<h4>Company</h4>
					<ul>
						<li><a href="">About</a></li>
						<li><a href="">Our Team</a></li>
						<li><a href="">Careers</a></li>
						<li><a href="">Contact</a></li>
					</ul>
				</section>
				<section>
					<img src={logoFacebook} alt="" />
					<img src={logoTwitter} alt="" />
					<img src={logoPinterest} alt="" />
					<img src={logoInstagram} alt="" />
				</section>
			</div>
			
		</footer>
	)
}
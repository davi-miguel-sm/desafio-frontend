import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Login from '../../header/Login';
import './NavBar.css';

export default function NavBar() {
	return (
		<nav className='navbar'>
			<div className='navbar__container'>
				<div className='navbar__togglemenu'>
					<button id='btnMenu'>
						<GiHamburgerMenu />
					</button>
				</div>
				<div className='navbar__titulo'>
					<h2>SLACA 2019</h2>
					<span>ISSN: 1234-5678</span>
				</div>
				<span className='navbar__login'>
					<Login />
				</span>
			</div>
		</nav>
	);
}

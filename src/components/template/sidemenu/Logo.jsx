import logo from '../../../assets/img/logo.svg';
import React from 'react';

export default function Logo() {
	return (
		<aside className='logo w-full'>
			<img src={logo} alt='logo' />
		</aside>
	);
}

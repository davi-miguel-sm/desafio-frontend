import React from 'react';
import Login from './Login';
import { FaGlobe } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import './Header.css';

export default function Header() {
	return (
		<header className='cabecalho'>
			<div className='cabecalho__titulo '>
				<p>Anais do Simpósio Latino Americano de Ciências de Alimentos </p>
				<p>Anais do 13º Simpósio Latino Americano de Ciência de Alimentos </p>
				<p>ISSN: 1234-5678</p>
			</div>
			<div className='cabecalho__dropdown'>
				<button className='dropdown__dropbtn'>
					<FaGlobe />
					<span>PT-BR</span>
					<IoMdArrowDropdown />
				</button>
				<Login email='alguem12@galoascience.com' />
			</div>
		</header>
	);
}

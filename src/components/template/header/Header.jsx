import React from 'react';
import Login from './Login';
import Globo from '../../../assets/img/globo.svg';
import './Header.css';

export default function Header() {
	return (
		<header className='cabecalho'>
			<div className='cabecalho__titulo '>
				<p>Anais do Simpósio Latino Americano de Ciências de Alimentos </p>
				<p>Anais do 13º Simpósio Latino Americano de Ciência de Alimentos </p>
				<p>ISSN: 1234-5678</p>
			</div>
			<div className='cabecalho__containerSelect'>
				<div className=''>
					<img className='' src={Globo} alt='Globo' />
					<select name='select' id='selectLanguages'>
						<option value='pt-br'>PT-BR</option>
						<option value='en'>EN</option>
					</select>
				</div>
				<Login email='alguem12@galoascience.com' className='' />
			</div>
		</header>
	);
}

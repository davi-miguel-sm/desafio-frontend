import React from 'react';
import Logo from './Logo';
import Li from './Li';
import './SideMenu.css';

export default function Menu() {
	return (
		<>
			<aside className='menulateral '>
				<div className='menulateral__slogan'>
					<h1>Slaca 2019</h1>
				</div>
				<Logo />
				<div className='menulateral__navegacao '>
					<ul>
						<Li text='Apresentação'></Li>
						<Li text='Comitês'></Li>
						<Li text='Autores'></Li>
						<Li text='Eixos Temáticos'></Li>
						<Li text='Trabalhos'></Li>
						<Li text='Contatos'></Li>
					</ul>
				</div>
			</aside>
		</>
	);
}

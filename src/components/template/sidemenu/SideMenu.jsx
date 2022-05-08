import React from 'react';
import Logo from './Logo';
import Li from './Li';

export default function SideMenu() {
	return (
		<>
			<nav className='menulateral bg-white z-10'>
				<Logo />
				<div className='menulateral__navegacao'>
					<ul>
						<Li text='Apresentação'></Li>
						<Li text='Comitês'></Li>
						<Li text='Autores'></Li>
						<Li text='Eixos Temáticos'></Li>
						<Li text='Trabalhos'></Li>
						<Li text='Contatos'></Li>
					</ul>
				</div>
			</nav>
		</>
	);
}

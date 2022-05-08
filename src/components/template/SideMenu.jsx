import React from 'react';
import Logo from '../parts/Logo';

export default function SideMenu() {
	return (
		<>
			<nav className='menulateral bg-white'>
				<div className='menulateral__titulo px-2 py-3 flex justify-center bg-gradient-to-t from-orange-500 to-orange-300'>
					<h1 className='tracking-tighter text-white text-4xl uppercase m-1'>
						slaca 2019
					</h1>
				</div>
				<Logo />
				<div className='menulateral__navegacao'>
					<ul>
						<li className='p-1 border-b-2 border-slate-500'>Apresentação</li>
						<li className='p-1 border-b-2 border-slate-500'>Comitês</li>
						<li className='p-1 border-b-2 border-slate-500'>Autores</li>
						<li className='p-1 border-b-2 border-slate-500'>Eixos Temáticos</li>
						<li className='p-1 border-b-2 border-slate-500'>Trabalhos</li>
						<li className='p-1 border-b-2 border-slate-500'>Contato</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

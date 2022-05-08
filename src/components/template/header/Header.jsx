import React from 'react';

export default function Header(props) {
	return (
		<header className='cabecalho'>
			<div
				className='cabecalho__titulo font-bold px-1 py-1 sm:px-2 sm:py-2 lg:py-3 flex 
				justify-center bg-gradient-to-t from-orange-500 to-orange-300'>
				<h1 className='tracking-tighter lg:tracking-normal text-white text-4xl uppercase m-1'>
					slaca 2019
				</h1>
			</div>
		</header>
	);
}

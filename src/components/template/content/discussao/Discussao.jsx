import React, { useState } from 'react';
import Formulario from './formulario/Formulario';
import Topico from './topico/Topico';

export default function Discussao() {
	return (
		<div className='conteudo__box'>
			<div className='conteudo__boxTitulo'>Discussões</div>
			<div className='conteudo__boxTexto box__discussao'>
				<Formulario />
				<Topico />
				<Topico />
				<Topico />
			</div>
		</div>
	);
}

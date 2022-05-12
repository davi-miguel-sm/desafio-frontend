import React, { useState } from 'react';
import Formulario from './Formulario'

export default function Discussao() {
	return (
		<div className='conteudo__box'>
			<div className='conteudo__boxTitulo'>Discussões</div>
			<div className='conteudo__boxTexto box__discussao'>
				<p id='sugestao'>
					Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!
				</p>
			</div>
		</div>
	);
}

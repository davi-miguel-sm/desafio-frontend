import React, { useState } from 'react';
import { TextoCompleto, TextoComprimido } from './Texto';

export default function Resumo() {
	const [showMore, setShowMore] = useState(true);
	return (
		<div className='conteudo__box'>
			<div className='conteudo__boxTitulo'>Resumo</div>
			<p className='conteudo__boxTexto'>
				{showMore ? <TextoComprimido /> : <TextoCompleto />}
				<button onClick={() => setShowMore(!showMore)} id='btnVer'>
					{showMore ? 'ver mais' : 'ver menos'}
				</button>
			</p>
		</div>
	);
}

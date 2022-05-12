import React, { useState } from 'react';
import { TextoCompleto, TextoComprimido } from './Texto';

export default function Resumo() {
	const [showMore, setShowMore] = useState(false);
	return (
		<div className='conteudo__box'>
			<div className='conteudo__boxTitulo'>Resumo</div>
			<p className='conteudo__boxTexto'>
				{showMore ? <TextoCompleto /> : <TextoComprimido />}
				<button onClick={() => setShowMore(!showMore)} id='btnVer'>
					{showMore ? 'ver menos' : 'ver mais'}
				</button>
			</p>
		</div>
	);
}

import React, { useState } from 'react';
import './Topico.css';
import { RiMore2Fill, RiHeartFill } from 'react-icons/ri';

export default function Topicos(props) {
	const [verRespostas, setverRespostas] = useState(false);

	return (
		<div className='topico'>
			<div className='topico__top'>
				<p id='topico__assunto'>Assunto da pergunta aparece aqui</p>
				<p id='topico__nomeAutor'>J.R.R.Tolkien</p>
			</div>
			<div className='topico__bottom'>
				<p id='topico__conteudo'>
					Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da
					análise da dimensão e impacto de processo formativo situado impacto de processo
					formativo processo...
				</p>
				<div className='topico__abaixoConteudo'>
					<button className='topico_btns'>
						<RiMore2Fill />
					</button>
					<button className='topico_btns'>
						<RiHeartFill />
					</button>
				</div>
			</div>
		</div>
	);
}

import React, { useState } from 'react';
import './Topico.css';
import { RiMore2Fill, RiHeartFill } from 'react-icons/ri';

export default function Topicos(props) {
	const [verRespostas, setverRespostas] = useState(false);

	return (
		<div className='topico'>
			<div className='topico__top'>
				<p id='topico__assunto'>{props.assunto}</p>
				<p id='topico__nomeAutor'>{props.autor}</p>
			</div>
			<div className='topico__bottom'>
				<p id='topico__conteudo'>{props.conteudo}</p>
				<div className='topico__abaixoConteudo'>
					<button className='topico_btns'>
						<RiMore2Fill />
					</button>
					<button className='topico_btns'>
						<RiHeartFill />
					</button>
					<span>{props.like > 1 ? `${props.like} likes` : `${props.like} like`}</span>
					<span>
						{props.resposta > 1
							? `${props.resposta} respostas`
							: `${props.resposta} resposta`}
					</span>
				</div>
			</div>
		</div>
	);
}

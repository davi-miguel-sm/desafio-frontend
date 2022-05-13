import React from 'react';

export default function EnviarForm() {
	return (
		<div className='enviaForm'>
			<p id='enviaForm_duvida'>
				Tem uma dúvida ou sugestão?
				<br />
				Compartilhe seu feedback com os autores!
			</p>
			<div className='enviaForm__inputs'>
				<label htmlFor='assuntoTopico' className='inputs__label'>
					Assunto
				</label>
				<input type='text' id='assuntoTopico' placeholder='Defina um tópico...' />
				<label htmlFor='conteudoTopico' className='inputs__label'>
					Conteudo
				</label>
				<textarea placeholder='Digite sua dúvida...' type='' id='conteudoTopico' />
			</div>
		</div>
	);
}

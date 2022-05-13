import React from 'react';
import { BiSlideshow } from 'react-icons/bi';
import { GiTeamIdea, GiSpellBook } from 'react-icons/gi';
import { RiArticleLine, RiContactsFill } from 'react-icons/ri';
import { MdWork } from 'react-icons/md';

export default function Li(props) {
	function defineIcon(valorProps) {
		switch (valorProps) {
			case 'Apresentação':
				return <BiSlideshow className='li__icon' />;
				break;
			case 'Comitês':
				return <GiTeamIdea className='li__icon' />;
				break;
			case 'Autores':
				return <GiSpellBook className='li__icon' />;
				break;
			case 'Eixos Temáticos':
				return <RiArticleLine className='li__icon' />;
				break;
			case 'Trabalhos':
				return <MdWork className='li__icon' />;
				break;
			case 'Contatos':
				return <RiContactsFill className='li__icon' />;
				break;
		}
	}

	function adicionaAtivo(valorProps) {
		if (valorProps === 'Trabalhos') {
			return 'li__ativo';
		}
	}

	return (
		<li className={`li__item ${adicionaAtivo(props.text)}`}>
			<a
				href={
					props.text === 'Trabalhos' ? '/' : 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
				}
				target={props.text === 'Trabalhos' ? '_self' : '_blank'}>
				{defineIcon(props.text)}
				{props.text}
			</a>
		</li>
	);
}

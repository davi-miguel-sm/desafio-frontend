import React from 'react';
import { BiSlideshow } from 'react-icons/bi';
import { GiTeamIdea, GiSpellBook } from 'react-icons/gi';
import { RiArticleLine, RiContactsFill } from 'react-icons/ri';
import { MdWork } from 'react-icons/md';

export default function Li(props) {
	function defineIcon(liMenu) {
		switch (liMenu) {
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

	function adicionaAtivo() {
		if (props.text === 'Trabalhos') {
			return 'li__ativo';
		}
	}

	return (
		<li className={`li__item ${adicionaAtivo()}`}>
			{defineIcon(props.text)}
			{props.text}
		</li>
	);
}

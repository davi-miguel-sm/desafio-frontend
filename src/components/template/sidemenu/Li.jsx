import React, { useState } from 'react';
import './Li.css';
import { BiSlideshow } from 'react-icons/bi';
import { GiTeamIdea, GiSpellBook } from 'react-icons/gi';
import { RiArticleLine, RiContactsFill } from 'react-icons/ri';
import { MdWork } from 'react-icons/md';

export default function Li(props) {
	function defineIcon(liMenu) {
		switch (liMenu) {
			case 'Apresentação':
				return <BiSlideshow className='m-1' />;
				break;
			case 'Comitês':
				return <GiTeamIdea className='m-1' />;
				break;
			case 'Autores':
				return <GiSpellBook className='m-1' />;
				break;
			case 'Eixos Temáticos':
				return <RiArticleLine className='m-1' />;
				break;
			case 'Trabalhos':
				return <MdWork className='m-1' />;
				break;
			case 'Contatos':
				return <RiContactsFill className='m-1' />;
				break;
		}
	}
	return (
		<li className='item flex align-baseline font-medium cursor-pointer p-1 border-b-2 border-slate-100 hover:underline'>
			{defineIcon(props.text)}
			{props.text}
		</li>
	);
}

import React from 'react';
import Resumo from './resumo/Resumo';
import Discussao from './discussao/Discussao';
import './Content.css';
import Video from './video/Video';

export default function Content() {
	return (
		<main className='conteudo'>
			<Video />
			<Resumo />
			<Discussao />
		</main>
	);
}

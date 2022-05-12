import React from 'react';
import './Video.css';
import urlVideo from './../../../../assets/img/video.svg';
import doi from './../../../../assets/img/doi.svg';
import { FaDownload, FaStar } from 'react-icons/fa';

export default function Video() {
	return (
		<div className='conteudo__video'>
			<div className='container__titulo'>
				<div className='conteudo__titulo'>
					<p>
						Análise sensorial de preparações funcionais desenvolvidas para escolares
						entre 09 e 15 anos, do município de Campinas/SP
					</p>
				</div>

				<div className='conteudo__download'>
					<ul className='ul__options'>
						<li>
							<a href='/'>
								Download
								<FaDownload />
							</a>
						</li>
						<li>
							<a href='/'>
								<FaStar />
							</a>
						</li>
						<li>
							<a href='/'>
								<img src={doi} alt='Doi' id='doi' />
							</a>
						</li>
					</ul>
					<p>COMO CITAR ESSE TRABALHO?</p>
				</div>
			</div>

			<div className='container__video'>
				<div className='video__container'>
					<img id='svgVideo' src={urlVideo} alt='Video' />
				</div>
				<div className='conteudo__box video__detalhes'>
					<p className='conteudo__boxTitulo'>Detalhes</p>
				</div>
			</div>
		</div>
	);
}

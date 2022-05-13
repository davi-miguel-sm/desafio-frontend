import React from 'react';
import urlVideo from './../../../../assets/img/video.svg';
import { FaDownload, FaStar, FaCircle } from 'react-icons/fa';
import './Video.css';

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
							<a href='/' id='ul__download'>
								<FaDownload />
								<span>Download</span>
							</a>
						</li>
						<li>
							<a href='/ ' id='ul__star'>
								<FaStar />
							</a>
						</li>
						<li>
							<a href='/' id='ul__doi'>
								<FaCircle />
							</a>
						</li>
					</ul>
					<a href='/' className='conteudo__citacao'>
						<span>COMO CITAR ESSE TRABALHO?</span>
					</a>
				</div>
			</div>

			<div className='container__video'>
				<div className='video__container'>
					<img id='svgVideo' src={urlVideo} alt='Video' />
				</div>
				<div className='conteudo__box video__detalhes '>
					<p className='conteudo__boxTitulo'>Detalhes</p>
					<div className='detalhes__conteudo'>
						<div id='detalhes__temas'>
							<p>
								Tipo de Apresentação:<strong> Pôster</strong>
							</p>
							<p>
								Eixo temático: <strong>Alimentação e saúde (AS)</strong>
							</p>
							<p>Palavras-chaves: Alimentos funcionais, alimentação escolar.</p>
						</div>
						<div id='detalhes__autores'>
							<p>Autores:</p>
							<p>Galileo Galilei¹</p>
							<p>Berta Lange de Morretes²</p>
							<p>Isaac Newton³</p>
							<p>Cesar Lattes¹</p>
							<p>Stephen Hawking⁴</p>
						</div>
						<div id='detalhes__legendas'>
							<p>¹Universidade Estadual de Campinas</p>
							<p>²Universidade de São Paulo</p>
							<p>³Instituto Nacional de Pesquisas Espaciais</p>
							<p>⁴Universidade Federal do Rio de Janeiro</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

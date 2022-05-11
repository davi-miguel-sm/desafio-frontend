import React from 'react';
import logoGaloa from '../../../assets/img/logoGaloa.svg';
import './Footer.css';

export default function Footer(props) {
	return (
		<footer className='rodape '>
			<div className='rodape__containerLogo '>
				<img className='rodape__logo' src={logoGaloa} alt='Galoá' />
				<div>
					<a href='/'>Saiba Mais</a>
				</div>
			</div>
			<div className='rodape__containerTexto'>
				<p>
					Preservar a memória da conferência e aumentar o alcance do conhecimento
					científico é a razão pela qual o Processo de Galoá foi criado.
				</p>
				<p>
					Os trabalhos da conferência publicados aqui são de acesso aberto e nossa
					indexação mantém os trabalhos apresentado na conferência fácil de encontrar e
					citar.
				</p>
			</div>
		</footer>
	);
}

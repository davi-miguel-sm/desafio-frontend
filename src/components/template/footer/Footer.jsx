import React from 'react';
import logoGaloa from '../../../assets/img/logoGaloa.svg';
import './Footer.css';
export default function Footer(props) {
	return (
		<footer className='rodape flex flex-col sm:flex-row m-2 bg-white border-t-2'>
			<div className='rodape__container flex-none m-3 w-fit sm:w-auto'>
				<img className='rodape__logo' src={logoGaloa} alt='Galoá' />
				<div>
					<a className='text-slate-50 flex place-content-center rounded-md' href='/'>
						Saiba Mais
					</a>
				</div>
			</div>
			<div className='rodape__texto m-3 flex flex-col justify-around'>
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

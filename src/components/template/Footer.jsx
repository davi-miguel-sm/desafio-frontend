import React from 'react';
import logoGaloa from '../../assets/img/logoGaloa.svg';

export default function Footer(props) {
	return (
		<footer className='rodape flex bg-slate-400 '>
			<section className='rodape__logo flex flex-col justify-center mx-1'>
				<div className=' bg-blue-200'>
					<img className='logoGaloa' src={logoGaloa} />
				</div>
				<div className='rodape__btnGaloa bg-purple-200 flex justify-center'>
					<button>
						<a
							href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'
							target='_blank'>
							Saiba mais
						</a>
					</button>
				</div>
			</section>

			<section className='rodape__descricao'>
				<p className='bg-orange-100'>
					Preservar a memória da conferência e aumentar o alcance do conhecimento
					científico é a razão pela qual o Processo de Galoá foi criado.
				</p>
				<p className='bg-red-100'>
					Os trabalhos da conferência publicados aqui são de acesso aberto e nossa
					indexação mantém os trabalhos apresentado na conferência fácil de encontrar e
					citar.
				</p>
			</section>
		</footer>
	);
}

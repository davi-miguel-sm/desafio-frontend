import React from 'react';
import iconAjude from '../../../../../../assets/img/ajude.svg';
import iconCompartilhe from '../../../../../../assets/img/compartilhe.svg';
import iconIdeia from '../../../../../../assets/img/ideia.svg';

export default function CriaForm() {
	return (
		<>
			<p id='sugestao'>Compartilhe suas ideias ou dúvidas com os autores!</p>
			<div className='icons'>
				<img src={iconAjude} alt='ajude' />
				<img src={iconCompartilhe} alt='ajude' />
				<img src={iconIdeia} alt='ajude' />
			</div>
			<p id='estimulo'>
				Sabia que o maior estímulo no desenvolvimento científico e cultural é a curiosidade?
				<br /> Deixe seus questionamentos ou sugestões para o autor!
			</p>
		</>
	);
}

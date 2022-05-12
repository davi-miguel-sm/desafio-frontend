import React, { useState } from 'react';
import Formulario from './formulario/Formulario';
import Topico from './topico/Topico';

export default function Discussao() {
	return (
		<div className='conteudo__box'>
			<div className='conteudo__boxTitulo'>Discussões</div>
			<div className='conteudo__boxTexto box__discussao'>
				<Formulario />
				<Topico
					like='32'
					resposta='45'
					assunto='Chuva'
					autor='Paulo Coelho'
					conteudo='Quem deseja ver o arco-íris, precisa aprender a gostar da chuva.'
				/>
				<Topico
					like='999'
					resposta='35'
					assunto='Motivação'
					autor='Rocky Balboa'
					conteudo={`O mundo não é um mar de rosas;
					é um lugar sujo, um lugar cruel, que não quer saber o
					quanto você é durão. Vai botar você de joelhos e você
					vai ficar de joelhos para sempre se você deixar. Você,
					eu, ninguém vai bater tão forte como a vida, mas não se
					trata de bater forte. Se trata de quanto você aguenta
					apanhar e seguir em frente, o quanto você é capaz de
					aguentar e continuar tentando. É assim que se consegue
					vencer. Agora se você sabe o seu valor, então vá atrás
					do que você merece, mas tem que estar preparado para
					apanhar. E nada de apontar dedos, dizer que você não
					consegue por causa dele ou dela, ou de quem quer que seja.
					Só covardes fazem isso e você não é covarde, você é melhor
					que isso.`}
				/>
				<Topico
					assunto='Amor'
					autor='Albert Einstein'
					conteudo='Se um dia tiver que escolher entre o mundo e o amor lembre-se: se escolher o mundo ficará sem o amor, mas se escolher o amor com ele você conquistará o mundo.'
					like='10'
					resposta='17'
				/>
			</div>
		</div>
	);
}

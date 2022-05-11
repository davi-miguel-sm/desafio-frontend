import React from 'react';
import './Content.css';

export default function Content() {
	return (
		<main className='conteudo'>
			<div className='conteudo__video'>
				<div>
					<p>Titulo</p>
					<p>Video</p>
				</div>
				<div>
					<p>Como citar esse Trabalho?</p>
					<p>Detalhes</p>
				</div>
			</div>
			<div className='conteudo__resumo'>
				<p>
					Etiam sollicitudin mauris nec dolor tempor commodo. Proin fermentum et enim quis
					pharetra. Ut tempus, massa elementum semper sollicitudin, ipsum tellus elementum
					ipsum, eu convallis lectus felis nec nulla. In arcu nunc, placerat at urna vel,
					lobortis pellentesque quam. Donec dapibus dignissim tortor vitae aliquam. Fusce
					sollicitudin in nulla lacinia facilisis. Cras in blandit tortor. Nulla eget
					lectus vitae quam interdum accumsan. Donec condimentum justo at ultrices
					volutpat. Sed lacinia est quam, vel tincidunt velit egestas quis. Pellentesque
					ac ex tristique, vulputate diam ac, elementum felis. Sed orci diam, egestas eu
					condimentum vitae, porttitor at ante. Morbi tincidunt risus ut sem malesuada
					commodo. Nulla fermentum sed ligula eu interdum. Proin sodales, mauris sit amet
					interdum bibendum, mi nulla facilisis ex, sit amet tincidunt felis diam sit amet
					sem. Donec maximus ornare auctor.
				</p>
			</div>
			<div className='conteudo__discussao'>Discussão</div>
		</main>
	);
}

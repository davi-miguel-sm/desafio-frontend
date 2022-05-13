import React, { useState } from 'react';
import CriarNovoForm from './criarnovoform/CriarNovoForm';
import EnviarForm from './enviarform/EnviarForm';
import Topico from '../../topico/Topico';
import { FaCheckDouble, FaItalic, FaBold } from 'react-icons/fa';
import './NovoForm.css';

export default function Compartilhe() {
	const [novoForm, setnovoForm] = useState(false);

	return (
		<>
			{novoForm ? <CriarNovoForm /> : <EnviarForm />}
			<div className='form__criar'>
				{novoForm ? (
					<>
						<span className='form__containerBtn'>
							<hr id='divisoria' />
							<button onClick={() => setnovoForm(!novoForm)} className='btnCriar'>
								criar novo topico
							</button>
						</span>
						<div className='containerCard'>
							<div className='porCima'>
								<p id='porCima__p1'>
									<FaCheckDouble />
								</p>
								<p id='porCima__p2'>Aguardando feedback dos autores</p>
								<p id='porCima__p3'>
									<a
										href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
										target='_blank'>
										Editar tópico
									</a>
								</p>
							</div>
							<div id='novoTopicoComprimido'>
								<Topico
									like='32'
									resposta='45'
									assunto='What is Lorem Ipsum?'
									autor='Lorem Ipsum'
									conteudo={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}
								/>
							</div>
						</div>
					</>
				) : (
					<div className='inputs__enviar'>
						<div>
							<button className='inputs__btnTexto'>
								<FaBold />
							</button>
							<button className='inputs__btnTexto'>
								<FaItalic />
							</button>
						</div>
						<button onClick={() => setnovoForm(!novoForm)} className='btnCriar'>
							Enviar
						</button>
					</div>
				)}
			</div>
		</>
	);
}

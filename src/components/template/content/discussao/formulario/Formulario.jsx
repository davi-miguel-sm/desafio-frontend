import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import CriaForm from './criaform/CriaForm';
import NovoForm from './novoform/NovoForm';
import './Formulario.css';

export default function Formulario() {
	const [form, setForm] = useState(false);
	return (
		<div className='form'>
			{form ? <NovoForm /> : <CriaForm />}
			<div className='form__criar'>
				<span className='form__containerBtn'>
					{form ? (
						``
					) : (
						<>
							<hr id='divisoria' />
							<button onClick={() => setForm(true)} className='btnCriar'>
								<FaPlus id='btnIcon' />
								criar Topico
							</button>
						</>
					)}
				</span>
			</div>
		</div>
	);
}

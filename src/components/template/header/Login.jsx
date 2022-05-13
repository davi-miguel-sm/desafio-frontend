import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './Login.css';

export default function Login(props) {
	return (
		<div className={`login ${props.className}`}>
			<div className='login__conta'>
				<p>Bem Vindo!</p>
				<p>{props.email}</p>
			</div>
			<div className='login__icone'>
				<FaUserCircle />
				<span className='notificacao'>2</span>
			</div>
		</div>
	);
}

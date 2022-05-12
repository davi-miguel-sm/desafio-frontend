import Content from '../components/template/content/Content';
import Footer from '../components/template/footer/Footer';
import Header from '../components/template/header/Header';
import SideMenu from '../components/template/menu/sidemenu/SideMenu';
import NavBar from '../components/template/menu/navbar/NavBar';

import './App.css';

export default function App() {
	return (
		<div className='app'>
			<SideMenu />
			<NavBar />
			<div className='app__container'>
				<Header />
				<div className='app__container__content'>
					<Content />
					<Footer />
				</div>
			</div>
		</div>
	);
}

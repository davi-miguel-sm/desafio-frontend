import Content from '../components/template/content/Content';
import Footer from '../components/template/footer/Footer';
import Header from '../components/template/header/Header';
import SideMenu from '../components/template/sidemenu/SideMenu';

import '../styles/global.css';

export default function App() {
	return (
		<div className='app'>
			<Header />
			<SideMenu />
			<Content />
			<Footer />
		</div>
	);
}

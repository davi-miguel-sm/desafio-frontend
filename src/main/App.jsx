import Content from '../components/template/Content';
import Footer from '../components/template/Footer';
import Header from '../components/template/Header';
import SideMenu from '../components/template/SideMenu';

import '../styles/global.css';

export default function App() {
	return (
		<div className='app '>
			<Header />
			<SideMenu />
			<Content />
			<Footer />
		</div>
	);
}

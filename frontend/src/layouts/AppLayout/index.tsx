import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '..';

const AppLayout = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default AppLayout;

import { Outlet } from 'react-router-dom';
import SideBar from '../AdminSidebar';

const AdminLayout = () => {
	return (
		<div className="flex ">
			<SideBar />
			<main className="w-full min-h-full px-[2rem] py-[4rem]">
				<Outlet />
			</main>
		</div>
	);
};

export default AdminLayout;

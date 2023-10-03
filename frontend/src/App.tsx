import { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AdminLayout, AppLayout } from './layouts';
import {
	AdminLogin,
	AdminProducts,
	AuthLayout,
	Cart,
	Categories,
	Dashboard,
	Home,
	Login,
	ProductDetails,
	Products,
	Register,
} from './pages';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function App() {
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);
	// AOS.init();
	// AOS.init({
	// 	duration: 1000, // values from 0 to 3000, with step 50ms
	// 	easing: 'ease', // default easing for AOS animations
	// });

	const { pathname } = useLocation();

	const navigate = useNavigate();

	const authenticated = true;

	const queryClient = new QueryClient();

	// search on use layout

	useEffect(() => {
		if (pathname === '/admin' && authenticated) {
			navigate('/admin/dashboard', { replace: true });
		} else if (pathname === '/admin' && !authenticated) {
			navigate('/admin/login', { replace: true });
		}
	}, [pathname]);

	return (
		<QueryClientProvider client={queryClient}>
			<Routes>
				<Route element={<AppLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="products" element={<Products />} />
					<Route path="product/:id" element={<ProductDetails />} />
					<Route path="cart" element={<Cart />} />
				</Route>

				<Route element={<AuthLayout />}>
					<Route path="auth/login" element={<Login />} />
					<Route path="auth/register" element={<Register />} />s
				</Route>

				<Route path="admin/login" element={<AdminLogin />} />
				<Route element={<AdminLayout />}>
					<Route path="admin/dashboard" element={<Dashboard />} />
					<Route path="admin/categories" element={<Categories />} />
					<Route path="admin/products" element={<AdminProducts />} />
				</Route>
			</Routes>

			<ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
		</QueryClientProvider>
	);
}

export default App;

import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Login from './pages/auth/Login';
import Layout from './pages/auth/Layout';
import Register from './pages/auth/Register';

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

	return (
		<div className="min-h-[100vh] flex flex-col justify-between">
			{pathname.includes('/auth/') === false && <Header />}
			<Routes>
				<Route element={<Layout />}>
					<Route path="auth/login" element={<Login />} />
					<Route path="auth/register" element={<Register />} />
				</Route>

				<Route path="/" element={<Home />} />
				<Route path="products" element={<Products />} />
				<Route path="product/:id" element={<ProductDetails />} />
				<Route path="cart" element={<Cart />} />
			</Routes>
			{pathname.includes('/auth/') === false && <Footer />}
		</div>
	);
}

export default App;

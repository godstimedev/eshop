import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';

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
	return (
		<div className="min-h-[100vh] flex flex-col justify-between">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="products" element={<Products />} />
				<Route path="product/:id" element={<ProductDetails />} />
				<Route path="cart" element={<Cart />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;

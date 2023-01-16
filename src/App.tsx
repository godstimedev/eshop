import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';

function App() {
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

// "Switch" a été remplacé par "Routes" avec react-router v6
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<NotFound />} />
				<Route path="/" element={<Home />} />
				<Route path="/a-propos" element={<About />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;

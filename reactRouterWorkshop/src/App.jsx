import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Blue from './components/Blue';
import Red from './components/Red';
import Home from './components/Home';
import Orange from './components/Orange';
import Yellow from './components/Yellow';
import Indigo from './components/Indigo';
import Violet from './components/Violet';
import Green from './components/Green';

function App() {
	return (
		<>
			<div id='container'>
				<h1>Howdy React Router 🤠 </h1>
				<div id='navbar'>
					<Link to='/'>Home</Link>
					<Link to='/red'>Red</Link>
					<Link to='/orange'>Orange</Link>
					<Link to='/yellow'>Yellow</Link>
					<Link to='/green'>Green</Link>
					<Link to='/blue'>Blue</Link>
					<Link to='/indigo'>Indigo</Link>
					<Link to='/violet'>Violet</Link>
				</div>
				<div id='main-section'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/red' element={<Red />} />
						<Route path='/orange' element={<Orange />} />
						<Route path='/yellow' element={<Yellow />} />
						<Route path='/green' element={<Green />} />
						<Route path='/blue' element={<Blue />} />
						<Route path='/indigo' element={<Indigo />} />
						<Route path='/violet' element={<Violet />} />
					</Routes>
				</div>
			</div>
		</>
	);
}

export default App;

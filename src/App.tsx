import './App.css'
import Home from './pages/Home/Home'
import Second from './pages/Second'

import { Routes, Route } from 'react-router-dom'

function App() {

	return (
		<>
			<Routes>
				<Route
					path='/'
					element={<Home  />}
				/>
				<Route path='/second' element={<Second />} />
			</Routes>
		</>
	)
}

export default App

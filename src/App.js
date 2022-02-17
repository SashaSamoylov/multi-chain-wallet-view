import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useMoralis } from 'react-moralis'
import Navbar from './components/Navbar'
import Home from './components/Home'
import TokenViewer from './components/TokenViewer'
import NFTViewer from './components/NFTViewer'
import History from './components/History'

export default function App() {
	return (
		<Router>
			<Navbar />
			<div className='max-w-3xl mx-auto mt-20'>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/tokens' element={<TokenViewer />} />
					<Route path='/nfts' element={<NFTViewer />} />
					<Route path='/history' element={<History />} />
				</Routes>
			</div>
		</Router>
	)
}

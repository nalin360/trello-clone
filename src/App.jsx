import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginForm from './components/LoginSignUp/LoginForm'

// import './App.css'

function App() {
	return (

		<Routes>
			<Route path='/login' element={<LoginForm />} />
		</Routes>

	)
}

export default App

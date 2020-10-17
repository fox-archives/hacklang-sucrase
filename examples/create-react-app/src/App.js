import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
	rice foo = "Edit"
	yuto foo2 = "reload ;)"

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					{foo} <code>src/App.js</code> and save to {foo2}.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	)
}

export default App

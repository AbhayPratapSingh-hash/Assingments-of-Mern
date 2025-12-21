import './App.css'
import React from 'react'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props)
		this.state = { hasError: false, error: null }
	}
	static getDerivedStateFromError(error) {
		return { hasError: true, error }
	}
	componentDidCatch(error, info) {
		// keep console error for debugging
		// eslint-disable-next-line no-console
		console.error('ErrorBoundary caught', error, info)
	}
	render() {
		if (this.state.hasError) {
			return (
				<div style={{ padding: 24 }}>
					<h2>Something went wrong</h2>
					<pre style={{ whiteSpace: 'pre-wrap', color: '#b91c1c' }}>{String(this.state.error)}</pre>
				</div>
			)
		}
		return this.props.children
	}
}

export default function App() {
	return (
		<ErrorBoundary>
			<Router>
				<div className="main-container">
					<nav className="navbar">
						<Link to="/" className="nav-link">Home</Link>
						<Link to="/about" className="nav-link">About</Link>
						<Link to="/contact" className="nav-link">Contact</Link>
					</nav>

					<main className="page-content">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</main>
				</div>
			</Router>
		</ErrorBoundary>
	)
}


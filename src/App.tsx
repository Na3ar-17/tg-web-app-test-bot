import { useEffect } from 'react'

const tg = window.Telegram.WebApp
function App() {
	useEffect(() => {
		tg.ready()
	}, [])

	const handleClose = () => {
		tg.close()
	}
	return (
		<div>
			<h1>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi,
				aliquid!
			</h1>
			<button onClick={handleClose}>Close</button>
		</div>
	)
}

export default App

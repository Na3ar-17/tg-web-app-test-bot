import { useEffect } from 'react'
import Header from './components/common/header/Header'
import { useTelegram } from './hooks/useTelegram'

function App() {
	const { onToggleButton, tg } = useTelegram()

	useEffect(() => {
		tg.ready()
	}, [])

	return (
		<div>
			<Header />
			<button onClick={onToggleButton}>toogle</button>
		</div>
	)
}

export default App

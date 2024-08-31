import { useEffect } from 'react'
import { useTelegram } from '../../../hooks/useTelegram'
import Header from '../../common/header/Header'

const Main = () => {
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

export default Main

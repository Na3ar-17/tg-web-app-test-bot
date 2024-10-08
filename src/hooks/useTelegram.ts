const tg = window.Telegram.WebApp

export const useTelegram = () => {
	const onClose = () => {
		tg.close()
	}

	const onToggleButton = () =>
		tg.MainButton.isVisible ? tg.MainButton.hide() : tg.MainButton.show()

	return {
		tg,
		onClose,
		user: tg.initDataUnsafe?.user,
		onToggleButton,
		queryId: tg.initDataUnsafe?.query_id,
	}
}

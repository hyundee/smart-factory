import { memo } from 'react'

interface IToggleButton {
	value: string
	onClick: () => void
}

export const ToggleButton = memo(function ToggleButton({ value, onClick }: IToggleButton) {
	return (
		<button className="h-8 w-full text-neutral-400" onClick={onClick}>
			{value}
		</button>
	)
})

import { memo } from 'react'
import ArrangeUp from '@public/icons/chevronUp.svg'
import ArrangeDown from '@public/icons/chevronDown.svg'

interface IArrangeButton {
	selectedIndex: number[]
	handleMoveUp: (indices: number[]) => void
	handleMoveDown: (indices: number[]) => void
}

export const ArrangeButton = memo(function ArrangeButton({
	selectedIndex,
	handleMoveUp,
	handleMoveDown,
}: IArrangeButton) {
	return (
		<div className="mb-2 flex justify-start gap-1 text-black">
			<button
				type="button"
				onClick={() => handleMoveUp(selectedIndex)}
				className="w-6 rounded bg-white">
				<ArrangeUp />
			</button>
			<button
				type="button"
				onClick={() => handleMoveDown(selectedIndex)}
				className="w-6 rounded bg-white">
				<ArrangeDown />
			</button>
		</div>
	)
})

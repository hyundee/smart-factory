import { memo } from 'react'

interface IAddButton {
	addElement: () => void
}

export const AddButton = memo(function AddButton({ addElement }: IAddButton) {
	return (
		<div className="flex h-8 w-16 items-center justify-center rounded-md bg-neutral-200 text-black">
			<button type="button" onClick={addElement}>
				추가
			</button>
		</div>
	)
})

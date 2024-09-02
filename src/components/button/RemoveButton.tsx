import { memo } from 'react'

interface IRemoveButton {
	removeElement: () => void
}

export const RemoveButton = memo(function RemoveButton({ removeElement }: IRemoveButton) {
	return (
		<div className="flex h-8 w-16 items-center justify-center rounded-md bg-neutral-200 text-black">
			<button type="button" onClick={removeElement}>
				삭제
			</button>
		</div>
	)
})

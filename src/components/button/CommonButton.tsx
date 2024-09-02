import { memo } from 'react'

interface ICommonButton {
	onClick: () => void
	text: string
}

export const CommonButton = memo(function CommonButton({ onClick, text }: ICommonButton) {
	return (
		<div className="flex h-8 w-fit items-center justify-center rounded-md bg-neutral-200 px-4 text-black">
			<button type="button" onClick={onClick}>
				{text}
			</button>
		</div>
	)
})

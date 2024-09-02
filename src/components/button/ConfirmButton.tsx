import { memo } from 'react'

interface IConfirmButton {
	text: string | null
}

export const ConfirmButton = memo(function ConfirmButton({ text }: IConfirmButton) {
	return (
		<button className="rounded-full border border-solid border-black bg-black px-4 py-0.5 text-white">
			{text}
		</button>
	)
})

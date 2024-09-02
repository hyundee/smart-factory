import { memo } from 'react'

interface IConfirmButton {
	text: string | null
	handleDelete: () => Promise<void>
}

export const DeleteButton = memo(function ConfirmButton({ text, handleDelete }: IConfirmButton) {
	return (
		<button
			type="button"
			onClick={handleDelete}
			className="rounded-full border border-solid border-black bg-black px-4 py-0.5 text-white">
			{text}
		</button>
	)
})

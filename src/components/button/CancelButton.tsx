import { memo } from 'react'

interface ICancelButton {
	text: string | null
	handleCancel: () => void
}

export const CancelButton = memo(function CancelButton({ text, handleCancel }: ICancelButton) {
	return (
		<button
			type="button"
			className="rounded-full border border-stone-300 bg-stone-100 px-4 py-0.5"
			onClick={handleCancel}>
			{text}
		</button>
	)
})

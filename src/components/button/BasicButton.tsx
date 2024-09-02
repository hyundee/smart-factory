import { ReactElement } from 'react'

interface IBasicRowButton {
	icon?: ReactElement
	label: string | ReactElement
	handleClick: () => void
}

export const BasicButton = ({ icon, label, handleClick }: IBasicRowButton) => {
	return (
		<button
			className="flex h-8 w-auto min-w-16 items-center justify-center rounded-md bg-neutral-200 px-2 text-black"
			onClick={handleClick}>
			<div className={`${!!icon ? (!!label ? 'mr-2' : '') : 'hidden'}`}>{icon}</div>
			{label}
		</button>
	)
}

import { memo } from 'react'

interface ITableHeader {
	headers: string[]
}

export const TableHeader = memo(function TableHeader({ headers }: ITableHeader) {
	console.log('TableHeader 랜더링')
	return (
		<div className="flex h-12 items-center justify-center bg-neutral-700 px-4 text-center">
			{headers.map((th, index) => {
				return (
					<div key={index} className="w-full p-1">
						{th}
					</div>
				)
			})}
		</div>
	)
})

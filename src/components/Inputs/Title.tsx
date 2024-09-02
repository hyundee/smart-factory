import { memo } from 'react'

interface ITitle {
	title: string
}

export const Title = memo(function Title({ title }: ITitle) {
	console.log('Title 랜더링')
	return <div className="mb-6 text-2xl font-semibold">{title}</div>
})

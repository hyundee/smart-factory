import { memo } from 'react'
import { NoData } from '@/components/notFound/noData'
import { SearchData } from '@/types/basic'
import { formatData } from '@/utils/formatData'

interface IOrderedDataList {
	dataList: SearchData[]
	keys: string[]
}

export const OrderedDataList = memo(function OrderedDataList({ dataList, keys }: IOrderedDataList) {
	console.log('OrderedDataList 랜더링')
	return (
		<div>
			{dataList && dataList.length > 0 ? (
				dataList.map((data, index) => {
					const Data = formatData(data)
					return (
						<div
							key={index}
							className="flex items-center bg-neutral-100 text-center text-black">
							{keys.map((key) => {
								return (
									<div key={key} className="w-full p-1">
										{Data[key as keyof typeof Data]}
									</div>
								)
							})}
						</div>
					)
				})
			) : (
				<NoData />
			)}
		</div>
	)
})

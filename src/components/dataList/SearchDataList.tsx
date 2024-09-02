import { memo } from 'react'
import { NoData } from '@/components/notFound/noData'
import { SearchData } from '@/types/basic'
import { formatData } from '@/utils/formatData'

interface IShearchDataList {
	dataList: SearchData[]
}

export const SearchDataList = memo(function SearchDataList({ dataList }: IShearchDataList) {
	console.log('SearchDataList 랜더링')
	return (
		<div>
			{dataList && dataList.length > 0 ? (
				dataList.map((data, index) => {
					const Data = formatData(data)
					return (
						<div
							key={index}
							className="flex items-center bg-neutral-100 text-center text-black">
							{Object.keys(Data).map((key) => {
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

import { memo } from 'react'
import { NoData } from '@/components/notFound/noData'
import { ProcessesData } from '@/types/basic'
import { formatData } from '@/utils/formatData'

interface IProcessesList {
	dataList: ProcessesData[]
	onClick: (id: number) => void
}

export const ProcessesList = memo(function SearchDataList({ dataList, onClick }: IProcessesList) {
	console.log('SearchDataList 랜더링')
	return (
		<div>
			{dataList && dataList.length > 0 ? (
				dataList.map((data) => {
					const Data = formatData(data)
					return (
						<div
							key={Data.id}
							onClick={() => onClick(Data.id)}
							className="flex items-center bg-neutral-100 text-center text-black">
							<div className="w-full p-1">{Data.name}</div>
						</div>
					)
				})
			) : (
				<NoData />
			)}
		</div>
	)
})

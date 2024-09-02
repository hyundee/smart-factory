import { memo } from 'react'
import { NoData } from '@/components/notFound/noData'
import { SharedCodeData } from '@/types/basic'
import { formatData } from '@/utils/formatData'

interface ISharedCodeList {
	dataList: SharedCodeData[]
	onClick: (id: number, name: string) => void
}

export const SharedCodeList = memo(function SharedCodeList({ dataList, onClick }: ISharedCodeList) {
	return (
		<div>
			{dataList && dataList.length > 0 ? (
				dataList.map((data) => {
					const Data = formatData(data)
					return (
						<div
							key={Data.id}
							onClick={() => onClick(Data.id, Data.name)}
							className="flex items-center bg-neutral-100 text-center text-black">
							<div className="w-full p-1">{Data.code}</div>
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
